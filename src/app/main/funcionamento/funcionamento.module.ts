import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { FuncionamentoRoutingModule } from './funcionamento.routing.module';
import { FuncionamentoComponent } from './funcionamento.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    FuncionamentoComponent,
    ServicosComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FuncionamentoRoutingModule
  ]
})
export class FuncionamentoModule { }
