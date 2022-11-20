import { Component, OnInit } from '@angular/core';
import { ListaItem } from './item-carrinho-compra';
import { Produto, Produtos } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public produtos!: Produtos;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.recuperaListaProdutos();
  }

  private recuperaListaProdutos(){
    this.produtoService.listasProduto()
    .subscribe((resposta: Produtos) => {
       this.produtos = resposta;
    }); 
  }

  adicionarItem(produto: Produto) {
    this.produtoService.adicionarItemAoCarrinho(produto)
      .subscribe((response:ListaItem) => {
            console.log(response);
            console.log("Item adicionado com sucesso!");
      }) 
  }

}
