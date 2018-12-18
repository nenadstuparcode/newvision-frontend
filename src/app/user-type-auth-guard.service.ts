
import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService, UserDetails } from './authentication.service'


@Injectable()
export class UserTypeAuthGuardService implements CanActivate {
  details:UserDetails
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
        if(!this.auth.isCompany()) {
          this.router.navigateByUrl('/dashboard')
           return false 
       
       } else {
         return true;
       }
  }


}
