import { Component, OnInit } from '@angular/core';
import { TrainsService } from './trains.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  stations: object[] = [];
  constructor(private trainsService: TrainsService) {}
  ngOnInit() {
    this.trainsService.fetchStations(result => {
      this.stations = result
        .filter(station => {
          if (station.passengerTraffic === false) {
            return false;
          }
          return true;
        })
        .map(station => {
          return station;
        });
      console.log(this.stations);
    });
  }
}
