import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { Contado } from '../class/contado.class';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContadoService extends CrudService<Contado> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}contado`);
  }

  list() {
    return this.http.get<Contado[]>(`${environment.API}contado/not`)
        .pipe(take(1));
  }

}
