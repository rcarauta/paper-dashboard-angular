import { Produto } from "./produto";

export interface ItemCarrinhoCompra {
    id: number;
    produto: Produto;
}

export type ListaItem = Array<ItemCarrinhoCompra>; 