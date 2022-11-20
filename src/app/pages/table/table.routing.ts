import { Routes } from '@angular/router';

import { TableComponent } from './table.component';
import { ProdutoDetailComponent } from 'app/pages/table/produto/produto-detail.component';
import { ProdutoComponent } from 'app/pages/table/produto.component';

export const TableRoutes: Routes = [
    { path: '',          component: TableComponent},
    { path: 'adicionar',      component: ProdutoComponent},
    { path: ':produtoId',     component: ProdutoDetailComponent }
];
