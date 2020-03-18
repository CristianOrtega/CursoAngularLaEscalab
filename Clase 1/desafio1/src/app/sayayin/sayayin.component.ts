import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sayayin',
  templateUrl: './sayayin.component.html',
  styleUrls: ['./sayayin.component.css']
})
export class SayayinComponent implements OnInit {

  messageTrainingResult: string;

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

  goTraining(e : any) {
    this.messageTrainingResult = e;
  }

}
