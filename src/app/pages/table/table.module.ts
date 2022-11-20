import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableRoutes } from './table.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoService } from 'app/pages/table/produto.service';
import { TableComponent } from 'app/pages/table/table.component';
import { ProdutoDetailComponent } from 'app/pages/table/produto/produto-detail.component';
import { ProdutoComponent } from 'app/pages/table/produto.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TableRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    ProdutoDetailComponent,
    ProdutoComponent,
    TableComponent
  ],
  providers: [
    ProdutoService
  ]
})

export class TableModule {}
