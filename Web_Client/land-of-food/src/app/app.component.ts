import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
        this.setCurrentUser();
    }

    setCurrentUser() {
        const user: User = JSON.parse(localStorage.getItem('user'));
        this.accountService.setCurrentUser(user);
    }
}
