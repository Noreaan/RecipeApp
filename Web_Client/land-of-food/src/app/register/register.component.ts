import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    model: any = {};

    constructor(
        private accountService: AccountService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
    }

    register() {
        this.accountService.register(this.model).subscribe((response: any) => {
            console.log(response);
            this.router.navigateByUrl('/home');
        }, error => {
            console.log(error);
            this.toastrService.error(error.error);
        });
    }
}
