export interface Produto {
    id: number;
	valor: number;
	nome: string;
	categoria: string;
	produtoPdf: any[];
	produtoImage: any[];
}

export type Produtos = Array<Produto>; 