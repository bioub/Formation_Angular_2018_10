import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  fillNewTodo(val) {
    return element(by.css('todo-form input')).sendKeys(val);
  }

  submitForm() {
    return element(by.css('todo-form form')).submit();
  }

  getTodo() {
    return element(by.css('todo-item')).getText();
  }
}
