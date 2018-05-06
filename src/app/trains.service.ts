import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class TrainsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  fetchArrival(e) {
    let data: any;
    this.http.get('https://swapi.co/api/planets/').subscribe(jsonObject => {
      data = jsonObject;
      e(jsonObject);
    });
  }
  fetchDeparture(e) {
    let data: any;
    this.http.get('https://swapi.co/api/planets/').subscribe(jsonObject => {
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
