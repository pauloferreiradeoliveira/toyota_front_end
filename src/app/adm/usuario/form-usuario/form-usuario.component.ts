import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/class/usuario.class';
import { AlertService } from 'src/app/shared/alert.service';
import { UsuarioService } from 'src/app/servico/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.sass'],
  preserveWhitespaces: true
})
export class FormUsuarioComponent implements OnInit {

  titulo = 'Criar novo Usuario';
  formulario: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertServico: AlertService,
    private usuarioServico: UsuarioService,
    private location: Location
  ) { }

  ngOnInit() {

    const usuario = this.route.snapshot.data['usuario'] as Usuario;

    if (usuario.id != null) {
      this.titulo = 'Editando Usuario';
    }

    this.formulario = this.formBuilder.group({
      id: usuario.id,
      nome: [usuario.nome, Validators.required],
      senha: [usuario.senha, Validators.required],
      adm: [usuario.adm]
    });

  }

  salvar() {
    this.submitted = true;
    if (this.formulario.valid) {
      const alert$ = this.alertServico.showAlertLoading('Enviado os dados');
      let msgSuccess = 'Usuário criado com sucesso!';
      let msgError = 'Erro ao criar usuário, tente novamente!';
      if (this.formulario.value.id) {
        msgSuccess = 'Usuário atualizado com sucesso!';
        msgError = 'Erro ao atualizar usuário, tente novamente!';
      }

      this.usuarioServico.save(this.formulario.value).subscribe(
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
    return this.formulario.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
    // console.log('onCancel');
  }


}
