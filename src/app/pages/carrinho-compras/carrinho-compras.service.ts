import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ListaCarrinhoCompras } from './carrinho-compras';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {

  constructor(private http: HttpClient) { }

  listaCarrinhoCompras(): Observable<ListaCarrinhoCompras> {
    return this.http.get<ListaCarrinhoCompras>(environment.urlBase + '/carrinho-compras/recupera/lista/usuario');
  }

  valorTotalAllItens(listaCarrinho: ListaCarrinhoCompras): Observable<number> {
    return this.http.post<number>(environment.urlBase + '/carrinho-compras/calcular/valor/total', listaCarrinho);
  }

}
