import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  public movie = null;

  constructor(public location: Location, private router: ActivatedRoute, public movieService: MovieService) { 

  }

  ngOnInit() {
    this.router.params.subscribe(routerParams => {
      this.getMovieDetail(routerParams.movie);
    });
  }

  public getMovieDetail(movieId: string) {
    this.movieService.getMovieById(movieId).pipe(
      take(1)
    ).subscribe(
      response => {
        this.movie = response;
        console.log(this.movie);
      },
      error => {
        console.log(error);
      },
      () => {
        //peticion finalizada
    });
  }

}
