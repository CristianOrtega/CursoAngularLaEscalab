import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  result: string;
  name: string;
  date: Date = new Date();

  travelTimeResult(e: any) {
    if (isNaN(e)) {
      this.result = 'Para viajar al pasado o al futuro debes ingresar los días';
      return null;
    }
    this.date = e;
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let month = monthNames[this.date.getMonth()];
    let day = String(this.date.getDate()).padStart(2, '0');
    let year = this.date.getFullYear();
    this.result = `Viajaste al ${day} de ${month} de ${year}`;
  }

}
