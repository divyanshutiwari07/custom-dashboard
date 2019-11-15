import { NgModule , NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AgmCoreModule } from '@agm/core';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { PageHeaderModule } from '../../shared';

import { GoogleMapComponent } from './google-map.component';

@NgModule({
  declarations: [GoogleMapComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    PageHeaderModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAvHOVyKdKTRI3y_Sxky2x0x2nD5r90-Bs'
    }),
    MDBBootstrapModule.forRoot(),

  ]
})
export class GoogleMapModule { }
