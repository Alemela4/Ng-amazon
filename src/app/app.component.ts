import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryButtonsComponent } from './components/category-buttons/category-buttons.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryButtonsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ng-amazon';
}
