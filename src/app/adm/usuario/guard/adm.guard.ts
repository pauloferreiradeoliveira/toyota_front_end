import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/servico/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private usuarioService: UsuarioService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean {

    if (this.usuarioService.getUsuario().adm) {
      return true;
    }
    this.router.navigate(['/adm']);
    return false;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.verificarAcesso();
  }
}
