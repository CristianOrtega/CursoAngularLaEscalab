import { AfterViewInit, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { LocationService } from 'src/app/core/services/location/location.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  listLocation: Location[];
  mySwiper: Swiper;

  constructor(private locationService: LocationService) {
    this.listLocation = [];
  }

  ngOnInit() {
    this.findLocationsByIds(this.getIdsToFinds());
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

  private findLocationsByIds(ids: string) {
    this.locationService.findLocationsByIds(ids).pipe(take(1)).subscribe(response => {
      this.listLocation = response;
    });
  }

  private getIdsToFinds(): string {
    let array = [];
    let ids = '';
    for (let i = 0; i < 6; i++) {
      let num = Math.floor((Math.random() * 76) + 1); 
      if (array.length === 0) {
        array.push(num);
      } else {
        let isRepeated = this.isNumberRepeated(array, num);
        if (isRepeated) {
          do {
            num = Math.floor((Math.random() * 10) + 1); 
            isRepeated = this.isNumberRepeated(array, num);
          } while (isRepeated)
        }
        
        array.push(num);
      }
      
    }
    return array.join();
  }

  private isNumberRepeated(array: number[], num: number): boolean {
    let isRepeated = false;
    if (array.indexOf(num) === 0) { 
       isRepeated = true;
    }
    return isRepeated;
  }

}
