import { ContactHttpService } from './../../core/contact-http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  contact = {
    name: '',
  };

  constructor(
    protected contactService: ContactHttpService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.contactService.create(this.contact).subscribe((contact: any) => {
      this.router.navigate(['contacts', contact.id]);
      // contactService ici est le même objet que contactService de ContactsList
      // on peut communiquer entre les 2 composants via un événement
      this.contactService.events.emit('refresh');
    });
  }
}
