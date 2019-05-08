import { Component, OnInit } from '@angular/core';
import { RespostaContadoService } from 'src/app/servico/resposta-contado.service';
import { Observable } from 'rxjs';
import { Resposta } from 'src/app/class/resposta.class';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  resposta$: Observable<Resposta[]>;

  constructor(private repostaService: RespostaContadoService) { }

  ngOnInit() {
    this.resposta$ = this.repostaService.list();
  }

}
