import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../models/product';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ricerca: string = ''; // proprietà per la ricerca dei prodotti

  constructor(private http: HttpClient) {}

  // http: HttpClient = inject(HttpClient); // inietta il servizio HttpClient dentro il servizio ProductsService. HttpClient è un servizio che consente di effettuare richieste HTTP e gestire le risposte in modo semplice e potente.

  // async getProducts(): Promise<ProductsResponse> {
  // metodo asincrono per ottenere i prodotti. Mi torna una Promise, cioè un oggetto che rappresenta un valore che potrebbe essere disponibile ora, o in futuro, o mai.
  // const response = await fetch('https://dummyjson.com/products'); // chiamata API per ottenere i prodotti
  // const data: ProductsResponse = await response.json(); // converte la risposta in formato JSON
  // return data; // restituisce i prodotti in formato JSON
  // }

  getProductsObservable(): Observable<ProductsResponse> {
    // Utilizzo di HttpClient per ottenere i prodotti
    // Il metodo get() di HttpClient restituisce un Observable, che è un flusso di dati che può essere osservato e a cui ci si può iscrivere per ricevere aggiornamenti.
    return this.http.get<ProductsResponse>('https://dummyjson.com/products'); // utilizza HttpClient per ottenere i prodotti da un'API
  }

  async getProductById(id: string) {
    // metodo asincrono per ottenere un prodotto per ID
    const response = await fetch(`https://dummyjson.com/products/${id}`); // chiamata API per ottenere il prodotto per ID
    const data: Product = await response.json(); // converte la risposta in formato JSON
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
