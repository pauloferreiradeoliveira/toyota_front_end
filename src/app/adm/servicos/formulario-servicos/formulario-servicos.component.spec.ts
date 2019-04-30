import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServicosComponent } from './formulario-servicos.component';

describe('FormularioServicosComponent', () => {
  let component: FormularioServicosComponent;
  let fixture: ComponentFixture<FormularioServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
