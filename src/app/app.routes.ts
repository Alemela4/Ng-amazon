import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'prodotti',
    component: ProductListComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contatti',
    component: ContattiComponent,
  },
  {
    path: 'prodotti/:id',
    component: ProductDetailComponent,
  },
];
