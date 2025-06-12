import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  ps: ProductsService = inject(ProductsService);
  route: ActivatedRoute = inject(ActivatedRoute); // inject ActivatedRoute serve per accedere ai parametri della rotta

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // ottiene il parametro id dalla rotta e lo converte in stringa. La rotta è definita in app.routes.ts
    this.ps
      .getProductById(id!)
      .then((prodotto) => (this.product = prodotto))
      .catch((err) => console.log(err)); // con l'id recuperato, chiamo il metodo del servizio che recupera dal server un prodotto in base all'id
  }
}
