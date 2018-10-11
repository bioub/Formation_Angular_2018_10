import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    // tous les modules qui importent SharedModule
    // auront accès à ces modules
    CommonModule, // *ngIf, *ngFor, [ngClass]...
    FormsModule, // [ngModel]...
    RouterModule, // [routerLink], router-outlet
  ]
})
export class SharedModule { }
