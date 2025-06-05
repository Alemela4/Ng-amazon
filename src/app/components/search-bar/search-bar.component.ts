import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  stringaRicerca: string = ""; // proprietà per la ricerca dei prodotti
  productsService: ProductsService = inject(ProductsService); // serve per iniettare il servizio
  
  eseguiRicerca() {
    this.productsService.aggiornaStringaRicerca(this.stringaRicerca); // metodo asincrono per aggiornare la stringa di ricerca
  }
}
