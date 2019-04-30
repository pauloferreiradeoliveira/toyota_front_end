
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { Sobre } from './../../class/sobre.class';
import { SobreService } from './../../servico/sobre.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit {
  accordion = 'accordion';
  titulo = 'Toyota Lages';
  subtitulo = 'Centro Automotivo Especializado em Toyota';
  sobre: Observable<Sobre[]>;
  imagens: string[];
  imagensCar: string[];

  constructor(private sobreSevice: SobreService,private alert: AlertService) {}

  ngOnInit() {
    this.getSobre();
    this.imagens = this.sobreSevice.getImagens();
    this.imagensCar = ['assets/slider1.jpg', 'assets/slider2.jpg'];
  }

  private getSobre(): void {
    this.sobre = this.sobreSevice.getSobre();
  }

  mostrar(url){
    this.alert.showImagem(url);
  }
}
