import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../shared/token/token-store.service';


@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.estaLogado()) {
      const token = this.tokenService.getToken();
      const tipo = this.tokenService.getTipo();
      const headers = new HttpHeaders().append('Authorization', tipo+ ' '+token);
      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
