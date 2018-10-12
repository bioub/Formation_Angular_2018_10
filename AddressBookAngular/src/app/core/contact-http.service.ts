import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  events = new EventEmitter<string>();

  constructor(protected httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/contacts');
  }

  getById(id) {
    return this.httpClient.get('http://localhost:3000/contacts/' + id);
  }

  create(contact) {
    return this.httpClient.post('http://localhost:3000/contacts', contact);
  }
}
