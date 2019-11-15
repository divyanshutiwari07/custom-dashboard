import { Component, OnInit } from '@angular/core';
import {PocService} from '../poc.service';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-poc-form-view',
  templateUrl: './poc-form-view.component.html',
  styleUrls: ['./poc-form-view.component.scss'],
  animations: [routerTransition()]
})
export class PocFormViewComponent implements OnInit {

  pocData: any = {};
  selected = false;
  constructor(private pocService: PocService, private router: Router) { }

  ngOnInit() {
    this.setForm();
    this.pocData = this.pocService.getPocData();
    this.getAccuracyForUsedCases();
  }

  getAccuracyForUsedCases = () => {
    if (!(this.pocData && this.pocData.usedCase)) { return; }
    const usedCaseIds = this.pocData.usedCase.map(({id}) => {
      return id;
    });
    // this.pocService.getUsedCasesAccuracy(usedCaseIds).subscribe(response => {
    //   console.log(response);
    // });
  }

  goToPrintPage() {
    this.router.navigateByUrl('poc-form-app/poc-form-print');
    this.pocService.setPocData(this.pocData);
    localStorage.setItem('pocData', JSON.stringify( this.pocData ));
    console.log(this.pocData);

  }

  setForm() {
    const data = JSON.parse(localStorage.getItem('pocData'));
    this.pocData = data;
  }
}
