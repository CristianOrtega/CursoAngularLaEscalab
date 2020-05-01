import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodesService } from 'src/app/core/services/episode/episodes.service';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpidoseRoutingModule } from './episode-routing.module';



@NgModule({
  declarations: [
    EpisodeComponent, 
    EpisodeListComponent
  ],
  imports: [
    CommonModule,
    EpidoseRoutingModule
  ],
  exports: [
    EpisodeListComponent,
    EpisodeComponent
  ],
  providers: [
    EpisodesService
  ]
})
export class EpidoseModule { }
