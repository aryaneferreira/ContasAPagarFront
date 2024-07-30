import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/core/routes';
import { MAT_DATE_LOCALE, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      // withInterceptors([authenticationInterceptor]),
    ),
    importProvidersFrom(MatSnackBarModule),
    provideAnimations(),
    // provideEnvironmentNgxMask(),
    provideRouter(ROUTES),
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always', appearance: 'outline' } },
    // importProvidersFrom(NgxViacepModule)
  ],
});
