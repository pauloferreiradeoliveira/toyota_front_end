import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable,  throwError } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, flatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError((errorResponse: HttpErrorResponse) => {
   
      if (errorResponse.status === 401 && errorResponse.error === 'token_expired') {
        const http = this.injector.get(HttpClient);

        return http.post<any>(`${environment.API}/refresh`, {}).pipe(
          flatMap(data => {
            localStorage.setItem('token', data.token);
            const cloneRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${data.token}` } });
            return next.handle(cloneRequest);
          }));

      }
      if (errorResponse.status === 401){
        localStorage.removeItem('token');
        this.router.navigate(['/adm/login']);

      }

      return throwError(errorResponse);
    }));

  }

}
