import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PocService} from '../poc.service';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.scss'],
  animations: [routerTransition()]
})
export class PocFormComponent implements OnInit {
  pocData: any = {};
  daysForPOC: string[];
  daysTravel: string[];
  submitted = false;
  itemList: {}[];
  dropdownSettings: {};
  tmpIndexArray: [];
  tabs: any [];


  constructor(private pocService: PocService, private router: Router) { }

  setForm() {
    const data = JSON.parse(localStorage.getItem('pocData'));
    if ( data ) {
      this.pocData = data;
    }
  }

  ngOnInit() {
    this.pocData = {};
    this.setForm();

    this.daysForPOC = this.pocService.getNumberOfDaysForPOC();
    this.daysTravel = this.pocService.getDaysTravel();
    this.itemList = this.pocService.getUsedCases();
console.log(this.daysForPOC);

    this.pocData.cameras = [];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select ',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'poc-select',
    };
  }

  printPocData() {
    console.log(this.pocData);
  }

  myCrazyCallback({key, data}) {
    console.log(event);
    this.pocData.cameras[key] = data;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  OnItemDeSelect(item: any) {
      console.log(item);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
  }

  validateForm(): boolean {
    return true;
  }

  moveToViewPage() {

    console.log('submit button clicked');

    if ( this.validateForm() ) {
      this.getEndDate();
      this.submitted = true;
      localStorage.setItem('pocData', JSON.stringify( this.pocData ));
      this.pocService.setPocData(this.pocData);
      this.router.navigateByUrl('poc-form-app/poc-form-view');
    } else {
      console.log('Something is off');
    }

  }

  getEndDate() {
    const someDate = new Date(this.pocData.tentativeStartDate);
    this.pocData.endDate = new Date( someDate.setDate(someDate.getDate() + +this.pocData.dayForPOC - 1) );
  }

  onClear() {
    this.submitted = false;
    this.pocData = {};
  }

  showCameraSections() {
    this.tmpIndexArray = Array.apply(null, Array(this.pocData.pocCameras)).map((x, i) => i);
  }

}
