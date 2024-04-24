import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
