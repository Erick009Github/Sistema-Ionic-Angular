import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = localStorage.getItem('ingresado');
    if (token !=null){
      authReq = req.clone({headers: req.headers.set('Authorization','Bearer ' + token)});
    }
    return next.handle(authReq);
  }
}

export const InterceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true }, ]