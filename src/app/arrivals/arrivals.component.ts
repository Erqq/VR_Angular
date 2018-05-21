import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { TrainsService } from "../trains.service";
@Component({
  selector: "app-arrivals",
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit, DoCheck {
  station: string;
  trains: any[] = [];
  stationShortCode: string;
  options = {
    minute: "2-digit",
    hour: '2-digit',

    month: "numeric",
    day: "numeric"
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private trainsService: TrainsService
  ) {}
  ngDoCheck() {
    if (this.station !== this.dataService.station) {
      this.stationShortCode = this.dataService.stationShortCode;
      this.station = this.dataService.station;
      this.getTrains();
      console.log(this.trains);

      console.log(this.dataService.stationShortCode);
      console.log(this.stationShortCode);
    }
  }
  getLocalTime(time) {
    const newTime = new Date(time);
    return newTime.toLocaleDateString("eng-Fi", this.options);
  }
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
  getTrains() {
    this.trainsService.fetchArrival(this.stationShortCode, result => {

      this.trains = result.filter(train=> {

          if (train.trainCategory === 'Cargo') {
            return false;
          }
          if (train.trainCategory === 'Locomotive') {
            return false;
          }
          return true;

      });

      console.log(this.trains);
    });
  }
  ngOnInit() {

}
