import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrenomComponent } from './form-prenom.component';

describe('FormPrenomComponent', () => {
  let component: FormPrenomComponent;
  let fixture: ComponentFixture<FormPrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
