import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Servicos } from 'src/app/class/servico.class';
;
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { take, switchMap } from 'rxjs/operators';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.scss'],
  preserveWhitespaces: true
})
export class ListaServicosComponent implements OnInit {

  servicos$: Observable<Servicos[]>;
  texto = [' Adicionar novo serviço', ' Atualizar', ' Remover'];

  constructor(
    private servicosService: FuncionamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
    ) { }

  ngOnInit() {
    this.reload();
    if (window.screen.width < 992) {
      this.texto = ['', '', ''];
    }
  }

  private reload() {
    this.servicos$ = this.servicosService.list();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.texto = ['', '', ''];
    } else {
      this.texto = [' Adicionar novo serviço', ' Atualizar', ' Remover'];
    }
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(servico: Servicos) {
    const result$ = this.alert.showConfirm('Confirmação', `Tem certeza que deseja remover ${servico.titulo} ?`);
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.servicosService.remove(servico.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.reload();
        },
        error => {
          this.alert.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      );
  }

}
