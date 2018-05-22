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
  movingTrains: any[] = [];
  constructor(
    private trainsService: TrainsService,
    private dataService: DataService
  ) {
    setInterval(() => {
      this.trainsService.fetchMovingTrains(result => {
        this.movingTrains = result;
      });
    }, 3500);
  }

  /**
   * updates station.
   */
  ngDoCheck() {
    this.checkStation(this.station);
  }

  /**
   * Checks which train station is selected.
   *
   * @param station Station which has been selected.
   */
  checkStation(station) {
    if (station !== undefined) {
      this.dataService.stations.forEach(element => {
        if (station === element.stationName) {
          this.dataService.station = this.station;
          this.dataService.stationShortCode = element.stationShortCode;
        }
      });
    }
  }

  /**
   * Gets the train stations to datalist.
   */
  ngOnInit() {
    this.trainsService.fetchStations(result => {
      this.dataService.stations = result
        .filter(station => {
          if (station.passengerTraffic === false) {
            return false;
          }
          return true;
        })
        .map(station => {
          return station;
        });
      this.stations = this.dataService.stations;
    });
  }
}
