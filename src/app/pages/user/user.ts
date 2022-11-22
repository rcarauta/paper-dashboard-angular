export interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    carrinhoCompras: Array<any>;
    perfis: Array<any>;
    enabled: boolean;
    password: string;
    username: string;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    authorities: Array<any>;
    accountNonLocked: boolean;
}

export type Users = Array<User>; 