import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService, Tipos } from 'src/app/servico/usuario.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private alertService: AlertService) {
  }

  ngOnInit() {

    if(this.usuarioService.getUsuarioAutenticado()){
      this.router.navigate(['adm']);
    }

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  hasError(field: string) {
    return this.formulario.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      const alert$ = this.alertService.showAlertLoading('Carregando ...');
      this.usuarioService.login(this.formulario.value)
        .subscribe(
          x => {
            alert$.onClose();
            if (x === Tipos.SUCCESS) {
              this.router.navigate(['adm']);
            } else if (x === Tipos.NOT_FOUND) {
              this.alertService.showAlertDanger('Usuário não encontrado.');
            } else {
              this.alertService.showAlertDanger('Erro no servidor tente mais tarde.');
            }
          }
        );
    } else {
      this.alertService.showAlertDanger('Preencher os campos corretamente.');
    }
  }


}
