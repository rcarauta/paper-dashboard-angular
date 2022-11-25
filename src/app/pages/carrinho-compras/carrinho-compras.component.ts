import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { TokenService } from '../../shared/token/token-store.service';
import { ListaCarrinhoCompras } from './carrinho-compras';
import { CarrinhoComprasService } from './carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss']
})
export class CarrinhoComprasComponent implements OnInit {
  public listaCarrinhoCompras!: ListaCarrinhoCompras;
  public valorTotal!: number;

  constructor(private carrinhoService :CarrinhoComprasService,
              private router: Router) { }

  ngOnInit(): void {
    this.recuperaListaCarrinhoCompras();
  }

  recuperaListaCarrinhoCompras() {
    this.carrinhoService.listaCarrinhoCompras()
    .subscribe((resposta: ListaCarrinhoCompras) => {
        this.listaCarrinhoCompras = resposta;
        this.carrinhoService.valorTotalAllItens(resposta)
        .subscribe((valor: number) => {
          this.valorTotal = valor;
        })
    });
  }

  

}
