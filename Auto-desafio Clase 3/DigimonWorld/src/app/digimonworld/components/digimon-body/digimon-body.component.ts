import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DigimonApiService } from '../../services/digimon/digimon-api.service';
import { Digimon } from '../../models/digimon';

@Component({
  selector: 'app-digimon-body',
  templateUrl: './digimon-body.component.html',
  styleUrls: ['./digimon-body.component.scss']
})
export class DigimonBodyComponent implements OnInit {

  @Output() exportDigimons = new EventEmitter();
  digimonLoaded = false;
  digimons: Digimon[];
  query: string;
  levelsFilter: string;

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set levelFilter(levelFilter: string) {
    if (levelFilter !== this.levelsFilter) {
        this.levelsFilter = levelFilter;
    }
  }

  constructor(private digimonService: DigimonApiService) { 

  }

  ngOnInit() {
    this.digimonLoaded = false;
    this.getAllDigimons();
  }

  getAllDigimons(): void {
    this.digimonService.getAllDigimons().subscribe((data: Digimon[]) => {
      this.digimons = data;
      this.exportDigimons.emit(this.digimons);
    });
  }

}
