import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng5-validation';

import { PocFormAppRoutingModule } from './poc-form-app-routing.module';
import { PageHeaderModule } from '../../shared';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { PocFormAppComponent } from './poc-form-app.component';
import { PocFormViewComponent } from './poc-form-view/poc-form-view.component';
import { PocFormPrintComponent } from './poc-form-print/poc-form-print.component';
import { PocFormComponent } from './poc-form/poc-form.component';
import { CameraInfoComponent } from './poc-form/camera-info/camera-info.component';

@NgModule({
  declarations: [PocFormAppComponent, PocFormViewComponent, PocFormPrintComponent, PocFormComponent, CameraInfoComponent],
  imports: [
    CommonModule,
    PocFormAppRoutingModule,
    PageHeaderModule,
    CustomFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AngularMultiSelectModule,
    FormsModule,
    NgbModule
  ]
})
export class PocFormAppModule { }
