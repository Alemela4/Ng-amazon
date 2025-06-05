import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit { 
  productsService: ProductsService = inject(ProductsService); // serve per iniettare il servizio
  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts() // metodo asincrono per ottenere i prodotti
    .then(r => this.products = r.products) 
    .catch(err => console.log("ERRORE NEL RECUPERO DEI PRODOTTI"));
  }
}
