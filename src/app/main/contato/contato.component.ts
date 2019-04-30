import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/alert.service';
import { ContadoService } from 'src/app/servico/contado.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contadoService: ContadoService,
    private alertServico: AlertService,
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: null,
      nome: ['', Validators.required],
      assunto: ['', Validators.required],
      email: ['', Validators.email],
      mensagem: ['', Validators.required]
    });
  }

  salvar() {
    this.submitted = true;
    if (this.form.valid) {
      const alert$ = this.alertServico.showAlertLoading('Enviando os dados');

      this.contadoService.save(this.form.value).subscribe(
        success => {
          alert$.onClose();
          this.alertServico.showAlertSuccess('Enviado com Sucesso.');
          this.router.navigate(['']);
        },
        error => {
          alert$.onClose();
          console.log(error);
          this.alertServico.showAlertDanger('Tente mais tarde ou Ligue para (61) 9 8625-6762');
        }
      );
    } else {
      this.alertServico.showAlertDanger('Preencher os campos corretamente.');
    }
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
