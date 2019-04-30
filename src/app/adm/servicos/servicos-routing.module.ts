import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaServicosComponent } from './lista-servicos/lista-servicos.component';
import { FormularioServicosComponent } from './formulario-servicos/formulario-servicos.component';
import { ServicosGuard } from './guard/servicos.guard';

const routes: Routes = [
  {path: '', component: ListaServicosComponent},
  {path: 'novo', component: FormularioServicosComponent , resolve: {
    servicos: ServicosGuard
  }},
  {path: 'editar/:id', component: FormularioServicosComponent , resolve: {
    servicos: ServicosGuard
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
