import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // bootstrap application serve per avviare l'applicazione Angular in un'area di lavoro di un browser
  .catch((err) => console.error(err));
