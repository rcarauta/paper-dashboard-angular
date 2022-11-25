import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoModule } from './carrinho-compras.routing';
import { CarrinhoComprasComponent } from './carrinho-compras.component';
import { CarrinhoComprasService } from './carrinho-compras.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CarrinhoModule),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    CarrinhoComprasComponent
  ],
  providers: [
    CarrinhoComprasService
  ]
})

export class CarrinhoComprasModule {}
