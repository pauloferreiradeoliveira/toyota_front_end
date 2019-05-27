import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatoModule { }
