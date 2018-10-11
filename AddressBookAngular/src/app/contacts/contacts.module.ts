import { NgModule } from '@angular/core';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent]
})
export class ContactsModule { }
