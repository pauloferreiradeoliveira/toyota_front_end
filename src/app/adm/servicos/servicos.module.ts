import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListaServicosComponent } from './lista-servicos/lista-servicos.component';
import { FormularioServicosComponent } from './formulario-servicos/formulario-servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListaServicosComponent, FormularioServicosComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CKEditorModule
  ]
})
export class ServicosModule { }
