import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { SubServicos } from 'src/app/class/subServicos.class';
import { Servicos } from 'src/app/class/servico.class';

import { AlertService } from 'src/app/shared/alert.service';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';


@Component({
  selector: 'app-formulario-servicos',
  templateUrl: './formulario-servicos.component.html',
  styleUrls: ['./formulario-servicos.component.sass'],
  preserveWhitespaces: true
})
export class FormularioServicosComponent implements OnInit {

  public Editor = ClassicEditor;
  titulo = 'Criar novo serviço';
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private funcionamentoService: FuncionamentoService,
    private alertServico: AlertService,
    private location: Location
    ) { }

  ngOnInit() {

    const servicos = this.route.snapshot.data['servicos'] as Servicos;

    if (servicos.id != null) {
      this.titulo = 'Editando serviço';
    }

    this.form = this.formBuilder.group({
      id: servicos.id,
      titulo: [servicos.titulo, Validators.required],
      descricao: [servicos.descricao],
      subServicos: this.formBuilder.array([
      ])
    });

    servicos.subServicos.forEach(x => {
      this.addSubServico(x);
    });
  }

  private subServicos(subServicos: SubServicos) {
    if (subServicos) {
      return this.formBuilder.group({
        titulo: [subServicos.titulo, Validators.required],
        descricao: [subServicos.descricao, Validators.required]
      })
    }
    return this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  removeSubServico(i: number) {
    this.aliases.removeAt(i);
  }

  get aliases() {
    return this.form.get('subServicos') as FormArray;
  }

  addSubServico(subServicos: SubServicos) {
    this.aliases.push(this.subServicos(subServicos));
  }

  salvar() {
    this.submitted = true;
    if (this.form.valid) {
      const alert$ = this.alertServico.showAlertLoading('Enviado os dados');
      let msgSuccess = 'Serviço criado com sucesso!';
      let msgError = 'Erro ao criar serviço, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Serviço atualizado com sucesso!';
        msgError = 'Erro ao atualizar serviço, tente novamente!';
      }

      this.funcionamentoService.save(this.form.value).subscribe(
        success => {
          alert$.onClose();
          this.alertServico.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => {
          alert$.onClose();
          this.alertServico.showAlertDanger(msgError);
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
    // console.log('onCancel');
  }

}
