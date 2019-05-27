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

  getImagens() {
    return [
      { src: 'assets/logos/toyota.png', alt: 'toyota' },
      { src: 'assets/logos/fiat.png', alt: 'fiat' },
      { src: 'assets/logos/honda.png', alt: 'honda' },
      { src: 'assets/logos/hyundai.png', alt: 'hyundai' },
      { src: 'assets/logos/chevrolet.png', alt: 'chevrolet' },
      { src: 'assets/logos/volkswagen.png', alt: 'volkswagen' },
      { src: 'assets/logos/ford.png', alt: 'ford' }
    ]
  }
}
