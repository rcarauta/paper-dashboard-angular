import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ListaItem } from './item-carrinho-compra';
import { Produto, Produtos } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public saveProduct(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(environment.urlBase + "/produto/", produto)
    .pipe(
      mergeMap((produto: Produto) => this.adicionarQRCodeAoProduto(produto.id))
    );
  }

  public listasProduto(): Observable<Produtos> {
    return this.http.get<Produtos>(environment.urlBase + '/produto/lista');
  }

  public adicionarItemAoCarrinho(produto: Produto): Observable<ListaItem> {
    return this.http.post<ListaItem>(environment.urlBase + "/carrinho-compras/add", produto);
  }

  public recuperarProduto(id:number): Observable<Produto> {
    return this.http.get<Produto>(environment.urlBase + "/produto/"+id);
  }

  public recuperarQrCodeProduto(id:number): Observable<any> {
    return this.http.get(environment.urlBase + "/qrcode/produto/"+id, {responseType: 'blob'});
  }

  private adicionarQRCodeAoProduto(id:number): Observable<Produto> {
    return this.http.post<Produto>(environment.urlBase + "/qrcode/generate", id.toString());
  }
}
