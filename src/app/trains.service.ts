import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
/**
 * Collection of the api calls to rata.digitraffic.
 */
@Injectable()
export class TrainsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
   * Fetches the arrival trains.
   * @param short station short code
   * @param e function
   */
  fetchArrival(short, e) {
    let data: any;
    this.http
      .get(
        'https://rata.digitraffic.fi/api/v1/live-trains/station/' +
          short +
          '?arrived_trains=0&arriving_trains=15&departed_trains=0&departing_trains=0&include_nonstopping=false'
      )
      .subscribe(jsonObject => {
        data = jsonObject;
        e(jsonObject);
      });
  }

  /**
   *  Fetches the departure trains.
   *
   * @param short station short code
   * @param e function
   */
  fetchDeparture(short, e) {
    let data: any;
    this.http
      .get(
        'https://rata.digitraffic.fi/api/v1/live-trains/station/' +
          short +
          '?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=15&include_nonstopping=false'
      )
      .subscribe(jsonObject => {
        data = jsonObject;

        e(jsonObject);
      });
  }

  /**
   * Fetches the moving trains
   *
   * @param e function
   */
  fetchMovingTrains(e) {
    let data: any;
    this.http
      .get('https://rata.digitraffic.fi/api/v1/train-locations/latest/')
      .subscribe(jsonObject => {
        data = jsonObject;
        e(jsonObject);
      });
  }

  /**
   * Fetches the stations
   *
   * @param e function
   */
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
