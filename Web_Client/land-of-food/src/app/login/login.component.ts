import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    model: any = {};

    constructor(
        private accountService: AccountService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
    }

    login() {
        this.accountService.login(this.model).subscribe((response) => {
            this.router.navigateByUrl('/recipe/add');
        }, (error) => {
            console.log(error);
            this.toastrService.error(error.error);
        });
    }
}
