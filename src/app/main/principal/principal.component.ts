
import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FuncionamentoService } from 'src/app/servico/funcionamento.service';
import { SobreService } from './../../servico/sobre.service';
import { AlertService } from 'src/app/shared/alert.service';

import { Servicos } from 'src/app/class/servico.class';
import { Sobre } from './../../class/sobre.class';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit {

  @ViewChild('test', {static: true}) myDivElementRef: ElementRef;

  accordion = 'accordion';
  sobre: Observable<Sobre[]>;
  servicos$: Observable<Servicos[]>;
  imagensLogos;
  imagensCar =  ['assets/silde1.jpeg', 'assets/silde2.jpeg', 'assets/silde3.jpeg'];

  constructor(private sobreSevice: SobreService,
              private alert: AlertService,
              private servicosSevicos: FuncionamentoService,
              private router: Router
              ) { }

  ngOnInit() {
    this.getSobre();
    this.imagensLogos = this.sobreSevice.getImagens();
  }

  private getSobre(): void {
    this.sobre = this.sobreSevice.getSobre();
    this.servicos$ = this.servicosSevicos.list();
  }

  mostrar(url): void {
    this.alert.showImagem(url);
  }

  left() {
    this.movimentar(300, false);
  }

  rigth() {
    this.movimentar(300, true);
  }

  // Para Poder Movimentar
  private movimentar(numb: number, g: boolean): void {
    let i: number;
    if (g) {
      i = this.myDivElementRef.nativeElement.scrollLeft - numb;
    } else {
      i = this.myDivElementRef.nativeElement.scrollLeft + numb;
    }
    this.myDivElementRef.nativeElement.scrollTo({ left: (i), behavior: 'smooth' });
  }

  passarServico(id: number) {
    this.router.navigate([`funcionamento/${id}`]);
  }

}
