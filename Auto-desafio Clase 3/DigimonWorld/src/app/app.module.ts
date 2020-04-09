import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './digimonworld/modules/material-module';
import { SearchPipe } from './digimonworld/pipes/search.pipe';
import { LevelFilterPiPe } from './digimonworld/pipes/levelFilter.pipe';
import { DigimonHeaderComponent } from './digimonworld/components/digimon-header/digimon-header.component';
import { DigimonBodyComponent } from './digimonworld/components/digimon-body/digimon-body.component';




@NgModule({
  declarations: [
    AppComponent,
    DigimonHeaderComponent,
    DigimonBodyComponent,
    SearchPipe,
    LevelFilterPiPe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
