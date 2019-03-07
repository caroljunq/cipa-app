import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authSerive: AuthenticationService) { }

  canActivate(): boolean {
    return this.authSerive.isAuthenticated();
  }
}
