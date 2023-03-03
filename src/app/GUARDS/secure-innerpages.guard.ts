import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {
  constructor(public tokenStorageService: TokenStorageService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.tokenStorageService.getToken() !== null) {
      console.log("Access Denied, You are already LoggedIn !!!");
      this.router.navigate(['/Dashboard']);
    }
    return true;
    }

}
