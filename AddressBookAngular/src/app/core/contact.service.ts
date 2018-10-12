import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable(/*{ providedIn: 'root' }*/)
export class ContactService {

  protected contacts = [{name: 'Michel Durand', id: 1}, {name: 'Patrice Dupont', id: 2}];

  constructor() { }

  getAll() {
    return of(this.contacts).pipe(
      delay(200),
    );
  }

  getById(id) {
    id = Number(id);
    const contact = this.contacts.find((c) => c.id === id);

    return of(contact).pipe(
      delay((id === 1) ? 5000 : 200),
    );
  }
}
