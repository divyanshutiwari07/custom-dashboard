import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PocFormAppComponent } from './poc-form-app.component';
import { PocFormViewComponent } from './poc-form-view/poc-form-view.component';
import { PocFormPrintComponent } from './poc-form-print/poc-form-print.component';
import { PocFormComponent } from './poc-form/poc-form.component';
// import { CameraInfoComponent } from './poc-form/camera-info/camera-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'poc-form' },
  { path: 'poc-form', component: PocFormComponent},
  { path: 'poc-form-view', component: PocFormViewComponent },
  { path: 'poc-form-print', component: PocFormPrintComponent },
  // { path: 'camera-info', component: CameraInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocFormAppRoutingModule { }
