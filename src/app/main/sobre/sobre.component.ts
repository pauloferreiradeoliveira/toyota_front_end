import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Sobre } from './../../class/sobre.class';
import { SobreService } from './../../servico/sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass']
})
export class SobreComponent implements OnInit {
  service: Observable<Sobre>;
  sobre: Sobre[];

  constructor(private sobreSevice: SobreService) {}

  ngOnInit() {
    this.sobreSevice.getSobreUni().subscribe(dados => {
      this.sobre = dados.lista;
    });
  }
}
