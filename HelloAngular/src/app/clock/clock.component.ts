import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rte-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  now = new Date();

  stringValue = 'test';
  color = 'blue';
  isTrue = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
