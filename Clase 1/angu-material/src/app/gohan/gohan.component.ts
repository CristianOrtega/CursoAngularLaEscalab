import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {

  @Output()
  emisor = new EventEmitter();

  @Input()
  ki: string;

  constructor() { }

  ngOnInit() {
  }

  darEnergia() {
    this.emisor.emit('TOMA MI ENERGIA!!!!')
  }

}
