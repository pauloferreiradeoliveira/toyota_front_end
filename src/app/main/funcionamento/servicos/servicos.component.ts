import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, Subscription } from 'rxjs';

import { FuncionamentoService } from 'src/app/servico/funcionamento.service';
import { Servicos } from 'src/app/class/servico.class';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit, OnDestroy {

  parms$: Subscription;
  inscricao$: Observable<Servicos>;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private funcionamentoService: FuncionamentoService
  ) { }

  ngOnInit() {

    this.parms$ = this.route.params
      .subscribe(
        x => {
          this.inscricao$ = this.funcionamentoService.loadByID(x.id);
        }
      );
  }

  ngOnDestroy(): void {
    this.parms$.unsubscribe();
  }


  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
