import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppAuthService } from "./app-auth.service";

@Injectable()
export class AuthGaurd implements CanActivate {
    constructor(private authService: AppAuthService) { }

    //checks if user has access to requested route
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authService.isAuthenticated();
    }
}