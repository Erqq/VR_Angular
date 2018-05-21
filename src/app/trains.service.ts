import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class TrainsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  fetchArrival(short, e) {
    let data: any;
    this.http
      .get(
        'https://rata.digitraffic.fi/api/v1/live-trains/station/' +
          short +
          '?arrived_trains=0&arriving_trains=20&departed_trains=0&departing_trains=0&include_nonstopping=false'
      )
      .subscribe(jsonObject => {
        data = jsonObject;
        e(jsonObject);
      });
  }
  fetchDeparture(short, e) {
    let data: any;
    this.http
      .get(
        'https://rata.digitraffic.fi/api/v1/live-trains/station/' +
          short +
          '?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=20&include_nonstopping=false'
      )
      .subscribe(jsonObject => {
        data = jsonObject;

        e(jsonObject);
      });
  }
  fetchStations(e) {
    let data: any;
    this.http
      .get('https://rata.digitraffic.fi/api/v1/metadata/stations')
      .subscribe(jsonObject => {
        data = jsonObject;
        e(jsonObject);
      });
  }
}
