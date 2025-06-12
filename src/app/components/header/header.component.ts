import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
