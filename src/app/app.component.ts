import { Component, OnInit, DoCheck } from '@angular/core';
import { TrainsService } from './trains.service';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';
  stations: any[] = [];
  station = '';
  constructor(
    private trainsService: TrainsService,
    private dataService: DataService
  ) {}
  ngDoCheck() {
    this.checkStation(this.station);
  }
  checkStation(station) {
    this.stations.forEach(element => {
      if (station === element.stationName) {
        this.dataService.station = this.station;
        this.dataService.stationShortCode = element.stationShortCode;
      }
    });
  }
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
    });
  }
}
