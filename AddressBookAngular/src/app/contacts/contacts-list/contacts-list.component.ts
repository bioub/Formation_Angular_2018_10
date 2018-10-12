import { ContactHttpService } from './../../core/contact-http.service';
import { ContactService } from './../../core/contact.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ContactsListComponent implements OnInit {

  contacts = [];

  constructor(protected contactService: ContactHttpService) { }

  ngOnInit() {
    this.getList();
    this.contactService.events.subscribe(() => {
      this.getList();
    });
  }

  getList() {
    this.contactService.getAll().subscribe((contacts: any) => {
      this.contacts = contacts;
    });
  }

}
