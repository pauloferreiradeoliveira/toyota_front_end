import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = req.url.split('/');
    const apiUrl: Array<any> = environment.API.split('/');
    const token = localStorage.getItem('token');

    if (token && (requestUrl[2] === apiUrl[2])) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      const newRequest = req.clone({headers});
      return next.handle(newRequest);
    } else {
      return next.handle(req);
    }
  }

}
