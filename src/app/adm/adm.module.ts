import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AdmRoutingModule } from './adm-routing.module';
import { AdminstradorEmailComponent } from './adminstrador-email/adminstrador-email.component';
import { AdmComponent } from './adm.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminstradorEmailComponent,
    AdmComponent,
    LoginComponent,
    AdminstradorEmailComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
  ]
})
export class AdmModule { }
