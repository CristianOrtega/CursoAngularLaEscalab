import { AfterViewInit, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/core/models/character';
import { Search } from 'src/app/core/models/search/search';
import { CharactersService } from 'src/app/core/services/character/characters.service';
import { UtilFunctions } from 'src/app/utils/CommonsUtils';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  characterList: Character[];
  mySwiper: Swiper;

  constructor(private charactersService: CharactersService) {
    this.characterList = [];
  }

  ngOnInit() {
    this.findCharactersByPage();
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

  private findCharactersByPage() {
    let ids = UtilFunctions.getRamdomIdsToFinds(9);
    this.charactersService.findCharactersByPage(ids).pipe(take(1)).subscribe(response => {
      this.characterList = response;
    });
  }

  doSearch(event: Search): void {

  }

}
