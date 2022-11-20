import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login } from './login';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logarUsuario(login: Login): Observable<Token> {
    return this.http.post<Token>(environment.urlBase + '/auth', login);
  }
}
