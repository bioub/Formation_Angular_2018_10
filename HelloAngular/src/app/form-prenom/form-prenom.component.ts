import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rte-form-prenom',
  templateUrl: './form-prenom.component.html',
  styleUrls: ['./form-prenom.component.scss']
})
export class FormPrenomComponent implements OnInit {

  prenom = 'Jean';
  newPrenom = 'Jean';

  constructor() { }

  ngOnInit() {
  }

  changePrenom() {
    this.prenom = this.newPrenom;
  }

}
