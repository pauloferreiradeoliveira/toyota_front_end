import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionamentoComponent } from './funcionamento.component';
import { ServicosComponent } from './servicos/servicos.component';

const funFoutes: Routes = [
  {path: '', component: FuncionamentoComponent, children: [
    {path: ':id', component: ServicosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(funFoutes)],
  exports: [RouterModule]
})

export class FuncionamentoRoutingModule { }
