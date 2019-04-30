import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Servicos } from 'src/app/class/servico.class';
;
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { take, switchMap } from 'rxjs/operators';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.sass'],
  preserveWhitespaces: true
})
export class ListaServicosComponent implements OnInit {

  servicos$: Observable<Servicos[]>;

  constructor(
    private servicosService: FuncionamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService
    ) { }

  ngOnInit() {
    this.reload();
  }

  private reload() {
    this.servicos$ = this.servicosService.list();
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
