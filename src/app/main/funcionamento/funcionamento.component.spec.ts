import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamentoComponent } from './funcionamento.component';

describe('FuncionamentoComponent', () => {
  let component: FuncionamentoComponent;
  let fixture: ComponentFixture<FuncionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
