import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css',
})
export class CategoryButtonsComponent implements OnInit {
  categories: Category[] = [];
  productsService: ProductsService = inject(ProductsService); // serve per iniettare il servizio

  ngOnInit(): void {
    // metodo per ottenere le categorie al caricamento del componente
    this.productsService
      .getCategories() // metodo asincrono per ottenere le categorie
      .then((r) => (this.categories = r)) // aggiorna la proprietà categories con le categorie ottenute
      .catch((err) => console.log('ERRORE NEL RECUPERO DELLE CATEGORIE'));
  }
}
