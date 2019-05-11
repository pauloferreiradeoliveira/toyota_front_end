
import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Sobre } from './../../class/sobre.class';
import { SobreService } from './../../servico/sobre.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Servicos } from 'src/app/class/servico.class';
import { FuncionamentoService } from 'src/app/servico/funcionamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit {

  @ViewChild('test') myDivElementRef: ElementRef;

  accordion = 'accordion';
  titulo = 'Toyota Lages';
  subtitulo = 'Centro Automotivo Especializado em Toyota';
  sobre: Observable<Sobre[]>;
  servicos$: Observable<Servicos[]>;
  imagens: string[];
  imagensCar: string[];

  constructor(private sobreSevice: SobreService,
              private alert: AlertService,
              private servicosSevicos: FuncionamentoService,
              private router: Router
              ) { }

  ngOnInit() {
    this.getSobre();
    this.imagens = this.sobreSevice.getImagens();
    this.imagensCar = ['assets/silde1.jpeg', 'assets/silde2.jpeg', 'assets/silde3.jpeg'];
  }

  private getSobre(): void {
    this.sobre = this.sobreSevice.getSobre();
    this.servicos$ = this.servicosSevicos.list();
  }

  mostrar(url) {
    this.alert.showImagem(url);
  }

  left() {
    this.movimentar(300, false);
  }

  rigth() {
    this.movimentar(300, true);
  }

  private movimentar(numb: number, g: boolean) {
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
