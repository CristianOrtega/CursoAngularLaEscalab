import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadorComponent } from './calculador/calculador.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { GohanComponent } from './gohan/gohan.component';
import { GokuComponent } from './goku/goku.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadorComponent,
    CompaComponent,
    CompbComponent,
    CompcComponent,
    GohanComponent,
    GokuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
