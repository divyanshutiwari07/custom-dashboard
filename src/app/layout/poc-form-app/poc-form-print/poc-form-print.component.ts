import { Component, OnInit } from '@angular/core';
import {PocService} from '../poc.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-poc-form-print',
  templateUrl: './poc-form-print.component.html',
  styleUrls: ['./poc-form-print.component.scss'],
  animations: [routerTransition()]
})
export class PocFormPrintComponent implements OnInit {

  pocData: any = {};

  constructor(private pocService: PocService) { }

  ngOnInit() {
    this.pocData = this.pocService.getPocData();
    this.setForm();
    console.log(this.pocData);
    setTimeout(function() {
      window.print();
    }, 100);
  }

  setForm() {
    const data = JSON.parse(localStorage.getItem('pocData'));
    this.pocData = data;
  }
}
