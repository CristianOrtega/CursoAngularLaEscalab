import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timetraveler',
  templateUrl: './timetraveler.component.html',
  styleUrls: ['./timetraveler.component.css']
})
export class TimetravelerComponent implements OnInit {

  days: number;
  date: Date = new Date();

  @Output()
  emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  timeTravel(operation: string) {
    switch (operation) {
      case 'past':
        this.date.setDate(this.date.getDate() - this.days);
        break;
      case 'present':
        this.date = new Date();
        break;
      case 'future':
        this.date.setDate(this.date.getDate() + this.days);
        break;
      default:
        break;
    }
    this.emitter.emit(this.date)
  }


}
