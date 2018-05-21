import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { TrainsService } from '../trains.service';
@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit, DoCheck {
  station: string;
  trains: any[] = [];
  stationShortCode: string;
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
  getTrains() {
    this.trainsService.fetchArrival(this.stationShortCode, result => {
      this.trains = result;

      console.log(this.trains);
    });
  }
  ngOnInit() {}
}
