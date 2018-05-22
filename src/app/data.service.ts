import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

/**
 * Collection of the data which is passed to child components
 */
@Injectable()
export class DataService {
  station: string;
  stationShortCode: string;
  stations: any[] = [];
  movingTrains: any[] = [];
}
