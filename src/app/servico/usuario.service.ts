import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario.class';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CrudService } from './crud.service';

export enum Tipos {
  SUCCESS, NOT_FOUND, ERRO
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService extends CrudService<Usuario> {
  confirmResult: Subject<Tipos>;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}usuario`);
    this.confirmResult = new Subject();
  }

  getUsuarioAutenticado(): string | null {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch {
      this.limparToken();
      return null;
    }
  }

  getUsuario(): Usuario {
    try {
      const token = JSON.parse(localStorage.getItem('usuario'));
      return token;
    } catch {
      this.limparToken();
      return null;
    }
  }

  limparToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  ativar(id: number) {
    return this.http.get(`${environment.API}usuario/ativar/${id}`).pipe(take(1));
  }

  login(usuario: Usuario) {
    const lugar = `${environment.API}login`;
    this.http.post(lugar, usuario).pipe(take(1))
      .subscribe(
        (x) => {
          localStorage.setItem('token', x['auth-jwt']);
          localStorage.setItem('usuario', JSON.stringify(x['usuario']));
          this.confirmResult.next(Tipos.SUCCESS);
        },
        error => {
          if (error.status === 404) {
            localStorage.removeItem('token');
            this.confirmResult.next(Tipos.NOT_FOUND);
          } else {
            this.confirmResult.next(Tipos.ERRO);
          }
        }
      );
    return this.confirmResult.asObservable().pipe(take(1));
  }
}
