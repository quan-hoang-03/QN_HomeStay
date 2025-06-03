import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter} from "@angular/router";
import { routes } from './app-routing.module';
import {Button} from "primeng/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FooterComponent} from "./layout/footer/footer.component";
import {NavbarComponent} from "./layout/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Button,
    FontAwesomeModule,
    FooterComponent,
    NavbarComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
