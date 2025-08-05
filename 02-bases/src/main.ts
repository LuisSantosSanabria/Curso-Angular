import { bootstrapApplication } from '@angular/platform-browser'; // tipo de platafroma para corer la app
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
