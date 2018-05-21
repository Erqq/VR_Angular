import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { TrainsService } from '../trains.service';
@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit, DoCheck {
  station: string;
  stationShortCode: string;
  trains: object[] = [];
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
      console.log(this.dataService.stationShortCode);
      console.log(this.stationShortCode);
    }
  }
  ngOnInit() {}
  getTrains() {
    this.trainsService.fetchDeparture(this.stationShortCode, result => {
      this.trains = result;
    });
  }
}
