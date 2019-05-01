import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/class/usuario.class';
import { UsuarioService } from 'src/app/servico/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements Resolve<Usuario> {

  constructor(private usuarioService: UsuarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Usuario | Observable<Usuario> | Promise<Usuario> {
    if (route.params && route.params['id']) {
      return this.usuarioService.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      senha:  null,
      adm: false
    });
  }

}
