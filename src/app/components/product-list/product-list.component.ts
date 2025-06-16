import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product, ProductsResponse } from '../../models/product';
import { RouterModule } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productsService: ProductsService = inject(ProductsService); // serve per iniettare il servizio
  products: Product[] = [];

  ngOnInit(): void {
    // this.productsService
    //   .getProducts() // metodo asincrono per ottenere i prodotti
    //   .then((r) => (this.products = r.products))
    //   .catch((err) => console.log('ERRORE NEL RECUPERO DEI PRODOTTI'));

    this.productsService
      .getProductsObservable()
      .pipe(
        catchError((err) => {
          console.log('ERRORE NEL RECUPERO DEI PRODOTTI', err);
          const valoreErrore: ProductsResponse = {
            products: [],
            total: 0,
            skip: 0,
            limit: 0,
          }; // crea un oggetto ProductsResponse vuoto in caso di errore
          return of(valoreErrore); // ritorna un Observable che emette l'oggetto vuoto
          // of() è un operatore che crea un Observable che emette i valori passati come argomento
        })
      )
      .subscribe((r) => (this.products = r.products)); // utilizza il metodo getProductsObservable() del servizio ProductsService per ottenere i prodotti e si iscrive all'Observable per ricevere gli aggiornamenti

    // .getProductsObservable()
    // .pipe(
    //   catchError(err => {
    //    console.log("ERRORE NEL RECUPERO DEI PRODOTTI", err);
    //    return of(undefined);
    //   })
    // )
    // .subscribe(r => this.products = r != undefined ? r.products : []);
  }

  filteredProducts() {
    // metodo per filtrare i prodotti
    // se la ricerca è vuota, ritorna tutti i prodotti
    // altrimenti ritorna i prodotti che contengono la stringa di ricerca
    if (this.productsService.ricerca != '')
      return this.products.filter(
        (x) =>
          x.title
            .toLowerCase() // converte il titolo in minuscolo
            .includes(this.productsService.ricerca.toLowerCase()) // converte la ricerca in minuscolo
      );
    else return this.products;
  }
}
