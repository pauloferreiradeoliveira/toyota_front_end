import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErroComponent } from './form-erro.component';

describe('FormErroComponent', () => {
  let component: FormErroComponent;
  let fixture: ComponentFixture<FormErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
