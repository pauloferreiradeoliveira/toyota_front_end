import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Usuario } from 'src/app/class/usuario.class';
import { UsuarioService } from 'src/app/servico/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

  usuario$: Observable<Usuario[]>;
  texto = [' Adicionar novo usuário', ' Atualizar', ' Desativar', ' Ativar'];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.reload();
    if (window.screen.width < 992) {
      this.texto = ['', '', '', ''];
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.texto = ['', '', '', ''];
    } else {
      this.texto = [' Adicionar novo usuário', ' Atualizar', ' Desativar', ' Ativar'];
    }
  }

  private reload() {
    this.usuario$ = this.usuarioService.list();
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(usuario: Usuario) {

    const result$ = this.alert.showConfirm('Confirmação', `Tem certeza que deseja desativar ${usuario.nome} ?`);
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.usuarioService.remove(usuario.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.reload();
        },
        error => {
          this.alert.showAlertDanger('Erro ao destivar. Tente novamente mais tarde.');
        }
      );
  }

  onAtivar(usuario: Usuario) {

    const result$ = this.alert.showConfirm('Confirmação', `Tem certeza que deseja Ativar ${usuario.nome} ?`);
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.usuarioService.ativar(usuario.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.reload();
        },
        error => {
          this.alert.showAlertDanger('Erro ao Ativar. Tente novamente mais tarde.');
        }
      );
  }

}
