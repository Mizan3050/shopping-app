import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { loginInput } from '../model/loginInput.interface';
import { PlatformService } from 'src/app/services/platform.service';

@Injectable({
    providedIn: 'root'
})
export class AppAuthService {

    loggedIn: boolean = false;
    currentUser: loginInput = {
        username: '',
        password: ''
    };
    public _isLoggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
    isLoggedIn$ = this._isLoggedIn.asObservable();

    getCurrentUser = new BehaviorSubject<loginInput>(this.currentUser);
    getCurrentUser$ = this.getCurrentUser.asObservable();
    isBrowser = false;

    constructor(
        private platformService: PlatformService
    ) {
        this.isBrowser = this.platformService.isBrowser();
    }

    logOut() {
        localStorage.removeItem('currentEmployee');
        this.isAuthenticated();
        this._isLoggedIn.next(false);
        this.getCurrentUser.next(this.currentUser);
    }

    logIn(currentUser: loginInput) {
        localStorage.setItem('currentEmployee', JSON.stringify(currentUser));
        this.isAuthenticated();
        this._isLoggedIn.next(true);
        this.getCurrentUser.next(this.currentUser);
    }
    //checks if user is logged in
    isAuthenticated() {
        if (this.isBrowser) {
            this.currentUser = JSON.parse(localStorage.getItem('currentEmployee') || '{}');
            if (this.currentUser === {} as any) {
                return this.loggedIn = false;
            } else {
                return this.loggedIn = true;
            }
        } return false;
    }

}
