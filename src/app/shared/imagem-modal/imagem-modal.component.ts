import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-imagem-modal',
  templateUrl: './imagem-modal.component.html',
  styleUrls: ['./imagem-modal.component.sass']
})
export class ImagemModalComponent implements OnInit {

  @Input() img = '';

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  private confirmAndClose() {
    this.bsModalRef.hide();
  }

  onClose() {
    this.confirmAndClose();
  }

}
