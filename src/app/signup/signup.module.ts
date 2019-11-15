import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { FormsModule } from '@angular/forms';

import { MustMatchDirective } from './helpers/must-match.directive';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,

  ],
  declarations: [SignupComponent, MustMatchDirective],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
