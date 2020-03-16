import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {

  mensajeGohan: string;

  @Input()
  mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  recibirEnergia(e : any) {
    this.mensajeGohan = e;
  }

}
