import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-poc-form-app',
  templateUrl: './poc-form-app.component.html',
  styleUrls: ['./poc-form-app.component.scss'],
  animations: [routerTransition()]
})
export class PocFormAppComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


}
