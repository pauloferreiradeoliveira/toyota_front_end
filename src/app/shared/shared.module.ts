import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FormErroComponent } from './form-erro/form-erro.component';
import { ImagemModalComponent } from './imagem-modal/imagem-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormErroComponent
  ],
  declarations: [AlertModalComponent, ConfirmModalComponent, FormErroComponent, ImagemModalComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent, ImagemModalComponent]
})
export class SharedModule { }
