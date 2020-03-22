import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTarjetaComponent } from './components/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AnimalesService } from './servicios/animales.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalComponent,
    AnimalTarjetaComponent,
    AnimalesComponent,
    BuscadorComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AnimalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
