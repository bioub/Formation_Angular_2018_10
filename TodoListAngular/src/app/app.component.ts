import { Todo } from './todo';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Todo[] = [{text: 'Pain', id: 5}, {text: 'Lait', id: 2}, {text: 'Beurre', id: 3}];
  toggleChecked = false;

  handleTodoChange(todo: Todo) {
    const nextId = this.items.reduce((maxId, t) => (t.id > maxId) ? t.id : maxId, 0) + 1;

    // ChangeDetectionStrategy.OnPush (copier le tableau)
    this.items = [{...todo, id: nextId}, ...this.items];

    // ChangeDetectionStrategy.Default
    // this.items.unshift(todo);
  }

  toggleAll() {
    // ChangeDetectionStrategy.OnPush (copier le tableau)
    /*
    this.items = this.items.map((t) => {
      t.done = this.toggleChecked;
      return t;
    });
    */
    this.items.forEach((t) => t.done = this.toggleChecked);
    this.items = [...this.items];

    // ChangeDetectionStrategy.Default
    // this.items.forEach((t) => t.done = this.toggleChecked);
  }
}
