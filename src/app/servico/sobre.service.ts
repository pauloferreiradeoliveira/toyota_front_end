import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Sobre } from 'src/app/class/sobre.class';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SobreService {

  constructor(private http: HttpClient) { }

  getSobre(): Observable<Sobre[]> {
    return this.http.get<Sobre[]>('assets/dados/sobre.json').pipe(take(1));
  }

  getSobreUni(): Observable<Sobre> {
    return this.http.get<Sobre>('assets/dados/sobre1.json').pipe(take(1));
  }

  getImagens(): string[] {
    return [
      'assets/logos/toyota.png',
      'assets/logos/fiat.png',
      'assets/logos/honda.png',
      'assets/logos/hyundai.png',
      'assets/logos/chevrolet.png',
      'assets/logos/volkswagen.png',
      'assets/logos/ford.png'
    ]
  }
}
