import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sayayintraining',
  templateUrl: './sayayintraining.component.html',
  styleUrls: ['./sayayintraining.component.css']
})
export class SayayintrainingComponent implements OnInit {

  @Output()
  emisor = new EventEmitter();

  @Input()
  trainingMessage: string;

  constructor() { }

  ngOnInit() {
  }


  startTraining() {
    const progress = Math.random() * 100;
    let message = null;
    if (progress <= 20) {
      message = `Tenemos que entrenar más duro para que superes tus limites.`;
    } else if (progress <= 40) {
      message = `WOOOW TU NIVEL DE PELEA ES MÁS DE 8000,`;
    } else if (progress <= 79) {
      message = `Te estas volviendo muy fuerte, seguimos entrenando una próxima vez.`;
    } else if (progress >= 80) {
      message = `Increible alcanzaste el Super Sayayin más rápido de lo que creí.`;
    }
    this.emisor.emit(message);
  }

}
