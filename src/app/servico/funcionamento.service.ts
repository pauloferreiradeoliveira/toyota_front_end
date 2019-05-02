import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicos } from 'src/app/class/servico.class';
import { take, filter, map, tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionamentoService extends CrudService<Servicos> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}servicos`);
  }

  list(): Observable<Servicos[]> {
    return this.http.get<Servicos[]>(`${environment.API}servicos`)
      .pipe(
        take(1),
        map(x => x.sort((x , y) => x.titulo < y.titulo ? -1 : 1))
        );
  }

  /*
  list() {
    return this.http.get<Servicos[]>('assets/dados/servicos.json')
      .pipe(
        take(1),
        map(x => x.sort((x , y) => x.titulo < y.titulo ? -1 : 1))
        );
  }

  loadByID(id: number) {
    //const lugar = `assets/dados/servicos${id}.json`;
    return this.list().pipe(
      map(x => x.find(xs => xs.id == id))
    );
  }
*/

}
