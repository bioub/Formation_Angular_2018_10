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

  constructor(protected contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
