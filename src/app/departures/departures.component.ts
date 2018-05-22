import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router, RouterModule, ActivatedRoute, Params } from "@angular/router";
import { DataService } from "../data.service";
import { TrainsService } from "../trains.service";

@Component({
  selector: "app-departures",
  templateUrl: "./departures.component.html",
  styleUrls: ["./departures.component.css"]
})
export class DeparturesComponent implements OnInit, DoCheck {
  station: string;
  stations: any[] = [];
  stationShortCode: string;
  trains: object[] = [];
  trainSchedule: object[] = [];
  options = {
    minute: '2-digit',
    hour: '2-digit',
    month: 'numeric',
    day: 'numeric'
  };
  constructor(
    private dataService: DataService,
    private trainsService: TrainsService
  ) {}

  /**
   * Updates data.
   */
  ngDoCheck() {
    if (this.station !== this.dataService.station) {
      this.stationShortCode = this.dataService.stationShortCode;
      this.station = this.dataService.station;
      this.getTrains();
    }
  }

  ngOnInit() {}

  /**
   * Returns the station name.
   *
   * @param shortCode station short code
   */
  getStationName(shortCode) {
    let name;
    for (let i = 0; i < this.dataService.stations.length; i++) {
      if (this.dataService.stations[i].stationShortCode === shortCode) {
        name = this.dataService.stations[i].stationName;
        break;
      }
    }
    return name;
  }

  /**
   * Changes the time to local time
   *
   * @param time time when the train is on the selected station
   */
  getLocalTime(time) {
    const newTime = new Date(time);
    return newTime.toLocaleDateString('eng-Fi', this.options);
  }

  /**
   *  Gets the departuring trains.
   */
  getTrains() {
    this.trainsService.fetchDeparture(this.stationShortCode, result => {
      this.trains = result.filter(train => {
        if (train.trainCategory === 'Cargo') {
          return false;
        }
        if (train.trainCategory === 'Locomotive') {
          return false;
        }
        if (train.trainCategory === 'On-track machines') {
          return false;
        }
        return true;
      });
    });
  }
}
