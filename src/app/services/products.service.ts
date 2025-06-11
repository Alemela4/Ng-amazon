import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ricerca: string = ''; // proprietà per la ricerca dei prodotti

  constructor() {}

  async getProducts() {
    // metodo asincrono per ottenere i prodotti. Mi torna una Promise, cioè un oggetto che rappresenta un valore che potrebbe essere disponibile ora, o in futuro, o mai.
    const response = await fetch('https://dummyjson.com/products'); // chiamata API per ottenere i prodotti
    const data: ProductsResponse = await response.json(); // converte la risposta in formato JSON
    return data; // restituisce i prodotti in formato JSON
  }

  async getCategories() {
    const response = await fetch('https://dummyjson.com/products/categories'); // chiamata API per ottenere le categorie
    const data: Category[] = await response.json(); // converte la risposta in formato JSON
    return data; // restituisce le categorie in formato JSON
  }

  async searchProducts(q: string) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURI(q)}`
    ); // chiamata API per cercare i prodotti
    const data: ProductsResponse = await response.json(); // converte la risposta in formato JSON
    return data; // restituisce i prodotti in formato JSON
  }

  aggiornaStringaRicerca(r: string) {
    console.log('NUOVA RICERCA:' + r);
    this.ricerca = r; // aggiorna la stringa di ricerca con il valore passato come parametro
  }
}
