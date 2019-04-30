import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ImagemModalComponent } from './imagem-modal/imagem-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, loating?: boolean, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.loading = loating;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }

    return (<AlertModalComponent> bsModalRef.content);
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertLoading(message: string) {
    return this.showAlert(message, AlertTypes.INFO, true);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, false, 3000);
  }

  showImagem(url: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ImagemModalComponent);
    bsModalRef.content.img = url;

    return (bsModalRef.content as ImagemModalComponent);
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent> bsModalRef.content).confirmResult;
  }
}
