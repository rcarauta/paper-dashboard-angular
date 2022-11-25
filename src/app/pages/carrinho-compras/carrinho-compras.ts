import { Produto } from "../table/produto";
import { User } from "../user/user";

export class CarrinhoCompras {
    id!: number;
    usuario!: User;
    produto!: Produto;
    quantidade!: number;
    valor!: number;
}

export type ListaCarrinhoCompras = Array<CarrinhoCompras>; 

