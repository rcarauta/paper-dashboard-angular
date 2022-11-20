import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class TokenService {

    constructor(){

    }

    salvaToken(token: string) {
        localStorage.setItem('token',token);
    }

    salvarTipo(tipo:string) {
        localStorage.setItem('tipo',tipo);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('tipo');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getTipo() {
        return localStorage.getItem('tipo');
    }

    estaLogado() {
        const token = localStorage.getItem('token');
        if(token == null) {
            return false;
        } else {
            return true;
        }
    }

  }