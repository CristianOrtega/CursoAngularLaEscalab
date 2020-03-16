import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x = 'frezer!'
  rpta: number = 0;

  recibirResultado(e: any) {
    this.rpta = e;
  }
}
