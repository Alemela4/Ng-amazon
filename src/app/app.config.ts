import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ], // provideHttpClient() è un provider che consente di effettuare richieste HTTP nell'applicazione Angular. È necessario per utilizzare il servizio HttpClient, che fornisce un modo semplice e potente per effettuare richieste HTTP e gestire le risposte.
};
