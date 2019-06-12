import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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

  sobre$: Observable<Sobre[]>;
  servicos$: Observable<Servicos[]>;
  imagensLogos: any;
  celular = false;
  imagensCar = ['assets/silde1.jpeg', 'assets/silde2.jpeg', 'assets/silde3.jpeg'];
  @ViewChild('test', {read: ElementRef, static: true })
    public myDivElementRef: ElementRef<any>;

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
    this.sobre$ = this.sobreSevice.getSobre();
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
    const element = this.myDivElementRef.nativeElement.children[1].children[1];
    if (g) {
      i = element.scrollLeft - numb;
    } else {
      i = element.scrollLeft + numb;
    }
    element.scrollTo({ left: (i), behavior: 'smooth' });
  }

  passarServico(id: number) {
    this.router.navigate([`funcionamento/${id}`]);
  }

}
