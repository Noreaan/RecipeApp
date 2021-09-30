import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    constructor(
        public accountService: AccountService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
    }

    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/login');
    }
}
