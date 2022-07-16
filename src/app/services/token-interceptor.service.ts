import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private AUTH_SERVICE: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const TOKENIZE_REQ = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.AUTH_SERVICE.OBTENER_TOKEN()}`
      }
    });

    return next.handle(TOKENIZE_REQ);
  }
}
