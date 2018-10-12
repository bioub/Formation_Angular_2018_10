import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/core/contact.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  contact;

  constructor(
    protected contactService: ContactService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    /*
    this.activatedRoute.params.subscribe((params) => {
      this.contactService.getById(params.id).subscribe((contact) => {
        this.contact = contact;
      });
    });
    */
    // évite le bug de requete 1 plus longue que la 2
    this.activatedRoute.params.pipe(
      switchMap((params) => this.contactService.getById(params.id))
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
