import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
declare var require: any;
const usedCases = require('../../../assets/data-source/used-cases.json');
const numberOfDaysForPOC = require('../../../assets/data-source/days-for-poc.json');
const daysTravel = require('../../../assets/data-source/days-travel.json');
const resolution = require('../../../assets/data-source/resolution.json');
const cameraHeight = require('../../../assets/data-source/cameraHeight.json');



@Injectable({
  providedIn: 'root'
})
export class PocService {
  data: {};


  constructor(private http: HttpClient) { }

  setPocData(data: {}) {
    this.data = data;
  }

  getPocData() {

    return this.data;
  }

  getUsedCases = () => usedCases;
  getNumberOfDaysForPOC = () => numberOfDaysForPOC;
  getDaysTravel = () => daysTravel;
  getResolution = () => resolution;
  getCameraHeight = () => cameraHeight;


  getUsedCasesAccuracy(usedCaseIds) {
    console.log(usedCaseIds);
    // Make a server call using axios to return data
    // return this.http.get("https://restcountries.eu/rest/v2/all");
  }

}
