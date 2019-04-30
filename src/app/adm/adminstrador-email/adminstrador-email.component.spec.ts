import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstradorEmailComponent } from './adminstrador-email.component';

describe('AdminstradorEmailComponent', () => {
  let component: AdminstradorEmailComponent;
  let fixture: ComponentFixture<AdminstradorEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstradorEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstradorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
