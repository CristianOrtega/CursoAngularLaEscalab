import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationService } from 'src/app/core/services/location/location.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EpisodeComponent } from './components/episode/episode.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EpisodeComponent
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
    LocationService
  ]
})
export class HomeModule { }
