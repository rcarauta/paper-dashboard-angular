import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  public novoProdutoForm!: FormGroup;
  public nome!: string;
  public valor!: number;
  public categoria!: string;

  constructor(private formBuilder: FormBuilder,
              private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
    this.novoProdutoForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        valor: ['', [Validators.required]],
        categoria: ['', [Validators.required]]
      }
    ); 
  }

  public salvar() {
    if(this.novoProdutoForm.valid){
      const novoProduto = this.novoProdutoForm.getRawValue() as Produto;
      this.produtoService.saveProduct(novoProduto)
      .subscribe((retorno: Produto) => {
        console.log(retorno);
        this.router.navigate(['/table']);
      })
    }
    
  }

}
