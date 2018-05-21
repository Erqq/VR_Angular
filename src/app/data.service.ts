import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class DataService {
  station: string;
  stationShortCode: string;
  stations: any[] = [];
}
