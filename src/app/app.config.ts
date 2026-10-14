import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideHttpClient } from '@angular/common/http';
import {
  MenuOutline,
  GithubOutline,
  SunOutline,
  MoonOutline,
  GlobalOutline,
  InstagramOutline,
  CloseOutline
} from '@ant-design/icons-angular/icons';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    provideClientHydration(),
    provideNzI18n(pt_BR),
    provideNzDateFnsAdapter(),
    provideHttpClient(),
    provideNzIcons([
      MenuOutline,
      GithubOutline,
      SunOutline,
      MoonOutline,
      GlobalOutline,
      InstagramOutline,
      CloseOutline
    ]),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'pt',
      lang: 'pt'
    }),
  ],
};
