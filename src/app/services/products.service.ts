import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ricerca: string = ""; // proprietà per la ricerca dei prodotti
  
  constructor() { }

  async getProducts(): Promise<ProductsResponse> { // metodo asincrono per ottenere i prodotti. Mi torna una Promise, cioè un oggetto che rappresenta un valore che potrebbe essere disponibile ora, o in futuro, o mai.
    const response = await fetch("https://dummyjson.com/products"); // chiamata API per ottenere i prodotti
    const data: ProductsResponse = await response.json(); // converte la risposta in formato JSON
    // console.log(data); 
    return data; // restituisce i prodotti in formato JSON
  }

  aggiornaStringaRicerca(r:string) {
    console.log("NUOVA RICERCA:" + r);
    this.ricerca = r; // aggiorna la stringa di ricerca con il valore passato come parametro
  }
}
