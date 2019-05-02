import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servico/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.sass']
})
export class AdmComponent implements OnInit {

  isCollapsed = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    if (window.screen.width < 992) {
      this.isCollapsed = true;
    }
  }

  sair() {
    this.usuarioService.limparToken();
    this.router.navigate(['']);
  }

  adm(): boolean{
    return this.usuarioService.getUsuario().adm;
  }

}
