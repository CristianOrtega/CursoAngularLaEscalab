import { Component } from '@angular/core';
import { Digimon } from './digimonworld/models/digimon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public search: string;
  public levelFilter: string;
  public digimons: Digimon[];


  exportDigimons(digimons: Digimon[]) {
    if (this.digimons !== digimons) {
       this.digimons = digimons;
    }
  }

  newDigimonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  newLevelSelected (level: string): void {
    if (this.levelFilter !== level) {
        this.levelFilter = level;
    }
  }

}
