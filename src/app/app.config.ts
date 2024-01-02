import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from '../util/config.service';
import {
  HttpBackend,
  HttpClient,
  provideHttpClient,
} from '@angular/common/http';

export function initConfig(appConfig: ConfigService) {
  return () => appConfig.setConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      multi: true,
      deps: [ConfigService],
    },
  ],
};
