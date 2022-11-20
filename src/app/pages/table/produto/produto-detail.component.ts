import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class ProdutoDetailComponent implements OnInit {
  produtoId!: number;
  produto$!: Observable<Produto>;
  qrCode: any;

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.produtoId = this.activatedRoute.snapshot.params['produtoId'];
    this.produto$ = this.produtoService.recuperarProduto(this.produtoId);
    this.produtoService.recuperarQrCodeProduto(this.produtoId)
    .subscribe((base64:any) => {
      let objectURL = URL.createObjectURL(base64);
      this.qrCode = this.sanitizer.bypassSecurityTrustUrl(objectURL);    
    })
  }


}
