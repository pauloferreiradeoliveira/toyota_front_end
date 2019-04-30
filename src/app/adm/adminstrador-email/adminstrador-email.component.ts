import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContadoService } from 'src/app/servico/contado.service';
import { Contado } from 'src/app/class/contado.class';
import { AlertService } from 'src/app/shared/alert.service';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RespostaContadoService } from 'src/app/servico/resposta-contado.service';


@Component({
  selector: 'app-adminstrador-email',
  templateUrl: './adminstrador-email.component.html',
  styleUrls: ['./adminstrador-email.component.sass']
})
export class AdminstradorEmailComponent implements OnInit {

  email: Contado;
  emails$: Observable<Contado[]>;
  modalRef: BsModalRef;
  form: FormGroup;
  submitted = false;

  constructor(
    private contadoService: ContadoService,
    private modalService: BsModalService,
    private alert: AlertService,
    private formBuild: FormBuilder,
    private respostaService: RespostaContadoService
    ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.reload();
    this.form = this.formBuild.group({
      id: null,
      idContado: null,
      mensagem: ['', Validators.required],
      assunto: ['', Validators.required]
    })
  }

  reload() {
    this.emails$ =  this.contadoService.list();
  }

  mudar(e: Contado) {
    this.email = e;
    this.form.get('idContado').setValue(e.id);
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onDelete() {
    const result$ = this.alert.showConfirm('Confirmação', `Tem certeza que deseja remover ${this.email.nome} ?`);
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.contadoService.remove(this.email.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.reload();
        },
        error => {
          console.log(error);
          this.alert.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      );
  }

  enviado() {
    this.modalRef.hide();
    this.reload();
    this.email = null;
  }

  salvar() {
    this.submitted = true;
    if (this.form.valid) {
      const alert$ = this.alert.showAlertLoading('Enviado os dados');
 

      this.respostaService.save(this.form.value).subscribe(
        success => {
          alert$.onClose();
          this.alert.showAlertSuccess('Enviado com sucesso.');
          this.enviado();
        },
        error => {
          alert$.onClose();
          if (error.status === 201 ) {
            this.alert.showAlertSuccess('Enviado com sucesso.');
            this.enviado();
          } else {
            this.alert.showAlertDanger('Tente mais tarde.');
          }
        }
      );
    } else {
      this.alert.showAlertDanger('Preencher os campos corretamente.');
    }
  }

  onCancel() {
    this.modalRef.hide();
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
