import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

//Change local
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'
registerLocaleData( localeEs );



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SalesModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
