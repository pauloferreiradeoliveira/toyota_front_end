import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Servicos } from 'src/app/class/servico.class';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.sass']
})
export class ServicosComponent implements OnInit,OnDestroy {

  inscricao: Subscription;
  servicos: Servicos;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
			(info: {servicos: Servicos}) => {
				this.servicos = info.servicos;
			}
		);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
