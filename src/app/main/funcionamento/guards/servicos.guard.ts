import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Servicos } from 'src/app/class/servico.class';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';


@Injectable({
  providedIn: 'root'
})
export class ServicosGuard implements Resolve<Servicos> {

  constructor(private funcionamentoService: FuncionamentoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Servicos | Observable<Servicos> | Promise<Servicos> {
    let id  = route.params['id'];
    return this.funcionamentoService.loadByID(id);
  }

}
