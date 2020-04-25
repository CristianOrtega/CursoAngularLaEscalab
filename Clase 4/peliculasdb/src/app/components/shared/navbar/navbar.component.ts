import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public searchData = null;
  public subscriptionSearchData: Subscription;

  constructor(private movieService: MovieService) { 
    this.subscriptionSearchData = this.movieService.observableSearchData$.subscribe(
      dataSearch => {
        this.searchData = dataSearch;    
      }
    );
  }

  ngOnInit() {

  }

  public getMoviesSearch() {
    if (this.searchData) {
        this.movieService.nextData(this.searchData);
    }
  }

}
