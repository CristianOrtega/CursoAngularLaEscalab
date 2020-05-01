import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchCharacterComponent } from './components/search-character/search-character.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CharacterComponent,
    SearchCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
   
  ]
})
export class HomeModule { }
