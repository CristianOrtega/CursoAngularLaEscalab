import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Digimon } from '../../models/digimon';

@Component({
  selector: 'app-digimon-header',
  templateUrl: './digimon-header.component.html',
  styleUrls: ['./digimon-header.component.scss']
})
export class DigimonHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  @Output() levelSelected = new EventEmitter();

  search: string;
  digimonList: Digimon[];
  levels: Array<string>;
  
  currentLevel: string;

  @Input() set digimons(digimons: Digimon[]) {
    if (digimons !== this.digimonList) {
        this.digimonList = digimons;
        this.setDigimonLevels(this.digimonList);
    }
  }

  constructor() { }

  ngOnInit() {
    this.levels = [];
  }


  searchEvent(search): void {
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  onLevelSelected(): void {
    if (this.currentLevel) {
      this.levelSelected.emit(this.currentLevel);
    } else {
      this.levelSelected.emit('');
    }
  }

  private setDigimonLevels(digimons: Digimon[]): void {
    digimons.forEach( digimon => {
      const LEVEL = digimon.level;
      if (!this.levels.includes(LEVEL)) {
        this.levels.push(LEVEL);
        this.levels.sort();
      }
    });
  }



}
