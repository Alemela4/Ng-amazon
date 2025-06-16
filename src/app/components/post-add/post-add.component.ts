import { Component, inject } from '@angular/core';
import { NuovoPost } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-post-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css',
})
export class PostAddComponent {
  model: NuovoPost = new NuovoPost(); // inizializza il modello con un nuovo oggetto NuovoPost

  ps = inject(ProductsService);

  aggiungiPost() {
    console.log(this.model);
    this.ps.addPost(this.model); // chiama il metodo addPost del servizio ProductsService passando il modello come parametro
    this.model = new NuovoPost(); // resetta il modello a un nuovo oggetto NuovoPost dopo l'aggiunta del post
    // qui potrei chiamare il servizio per fare una HTTP POST e salvare il post sul server
  }
}
