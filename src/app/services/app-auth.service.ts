import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { loginInput } from '../model/loginInput.interface';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  loggedIn:boolean = false;
  currentUser:string | null = '';
  public _isLoggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  isLoggedIn$ = this._isLoggedIn.asObservable();

  logOut(){
      localStorage.removeItem('currentEmployee');
      this.isAuthenticated();
      this._isLoggedIn.next(false);
  }
  
  logIn(currentUser: loginInput){
      localStorage.setItem('currentEmployee', JSON.stringify(currentUser));
      this.isAuthenticated();
      this._isLoggedIn.next(true);
  }
  //checks if user is logged in
  isAuthenticated(){
      this.currentUser = localStorage.getItem('currentEmployee');
      if (this.currentUser===null) {
          return this.loggedIn = false
      } else {
          return this.loggedIn = true;
      } 
  }

}
