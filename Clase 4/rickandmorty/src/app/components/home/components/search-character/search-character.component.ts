import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Search } from 'src/app/core/models/search/search';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  @Output() public filters = new EventEmitter<Search>();
  @Output() public try = new EventEmitter<boolean>();

  characterId: number;
  characterName: string;
  characterStatus: string;
  characterGender: string;

  constructor() { 
    this.characterName = '';
  }

  ngOnInit() {
  }

  search() : void {
    let search: Search;
    search.id = this.characterId;
    search.name = this.characterName;
    search.status = this.characterStatus;
    search.gender = this.characterGender;
    this.filters.emit(search);
  }

  tryLuck(): void {
    this.try.emit(true);
  }

}
