import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signUpDetails: any = {};
    constructor( public router: Router ) {}

    ngOnInit() {

    }
    onSubmit() {
        console.log(this.signUpDetails);
        if ( this.signUpDetails ) {
            localStorage.setItem('signUpDetails', JSON.stringify( this.signUpDetails  ));
            this.router.navigateByUrl('/dashboard');
            localStorage.setItem('isLoggedin', 'true');
        }

    }
}

