import { Component, OnInit } from '@angular/core';


import { Servicos } from './../../class/servico.class';
import { Observable } from 'rxjs';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';


@Component({
  selector: 'app-funcionamento',
  templateUrl: './funcionamento.component.html',
  styleUrls: ['./funcionamento.component.scss']
})
export class FuncionamentoComponent implements OnInit {

  servicos$: Observable<Servicos[]>;

  constructor(private funcionamento: FuncionamentoService) {
  }

  ngOnInit() {
    this.servicos$ = this.funcionamento.list();

  }

}
