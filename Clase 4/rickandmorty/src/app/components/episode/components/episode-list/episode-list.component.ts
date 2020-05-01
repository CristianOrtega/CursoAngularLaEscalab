import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Episode } from 'src/app/core/models/episode';
import { SearchResult } from 'src/app/core/models/response/search-results';
import { EpisodesService } from 'src/app/core/services/episode/episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  totalRecords: number;
  asyncEpisodeList: Observable<Episode[]>;

  constructor(private episodesService: EpisodesService) { 
    this.totalRecords = 0;
  }

  ngOnInit() {
    this.getEpisodeList();
  }

  private loadEpisodes(): Observable<SearchResult<Episode>>  {
    return this.episodesService.findEpisodes();
  }

  private getEpisodeList(): void {
    this.asyncEpisodeList = this.loadEpisodes().pipe( 
      tap(response => {
        this.totalRecords = response.info.count;
      }),
      map (response => response.results)
    );
  }

}
