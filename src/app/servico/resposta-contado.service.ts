import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CrudService } from './crud.service';
import { Resposta } from '../class/resposta.class';



@Injectable({
  providedIn: 'root'
})
export class RespostaContadoService extends CrudService<Resposta> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}responder`);
  }

  remove() {
    return null;
  }
}
