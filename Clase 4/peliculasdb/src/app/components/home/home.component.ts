import { Component, OnInit, OnDestroy} from '@angular/core';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { MovieService } from '../../services/movie.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})

export class HomeComponent implements OnInit, OnDestroy {

  public viewCount = 9;
  public page = 0;
  public pageSize = 9;
  public previousPage = 0;
  public movies = [];
  public moviesStorage = [];
  public objectMovie: any;
  public message: string = null;
  public subscriptionSearchData: Subscription;
  private componentDestroyed: Subject<boolean> = new Subject();

  constructor(private movieService: MovieService, private router: ActivatedRoute) { 
      this.subscriptionSearchData = this.movieService.observableSearchData$.subscribe(
        dataSearch => {
          if (dataSearch) {
             this.getDataSearch(dataSearch);
          }
      });
  }

  ngOnInit() {
    this.router.params.subscribe(routerParams => {
      this.getPopular(routerParams.category);
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
    this.subscriptionSearchData.unsubscribe();
  }

  public changeViewMovie() {
    this.movies = [];
    this.movies = this.moviesStorage.slice(0, this.viewCount);
  }

  public getPopular(category: string) {
    this.movies = [];
    this.movieService.getPopular(category).pipe(
      take(1)
    ).subscribe(
      response => {
        this.moviesStorage = response.results; // Es la estructura de la respuesta
        this.movies = response.results.slice(0, this.viewCount);
        console.log(this.movies);
      },
      error => {
        console.log(error);
      },
      () => {
        //peticion finalizada
      }
    );
  }

  public getDataSearch(search: string) {
    this.movies = [];
    this.movieService.getSearch(search).pipe(
      take(1)
    ).subscribe(
      response => {
        if (response.results.length === 0) {
          this.message = 'No existen resultados para tú búsqueda';
        }
        this.moviesStorage = response.results;
        this.movies = response.results.slice(0, this.viewCount);
        console.log(this.movies);
      },
      error => {
        console.log(error);
      },
      () => {
        //peticion finalizada
      }
    );
  }

}
