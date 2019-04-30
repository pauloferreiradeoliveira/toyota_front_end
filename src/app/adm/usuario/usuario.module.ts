import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';


@NgModule({
  declarations: [ListaUsuarioComponent, FormUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
