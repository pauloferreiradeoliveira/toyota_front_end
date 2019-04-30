import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { UsuarioGuard } from './guard/usuario.guard';

const routes: Routes = [
  {path: '', component: ListaUsuarioComponent},
  {path: 'novo', component: FormUsuarioComponent , resolve: {
    usuario: UsuarioGuard
  }},
  {path: 'editar/:id', component: FormUsuarioComponent , resolve: {
    usuario: UsuarioGuard
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
