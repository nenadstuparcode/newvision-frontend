

import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls:['../../assets/styles/pages/auth.min.css', './login.component.css']
})
export class LoginComponent {
  details:UserDetails
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    contact_number:'',
    user_type_id: 0,
    date_of_birth:"",
    city: '',
    address: '',
    country: '',
    gender: '',
    company_name:'',
    profession_type_name: ""
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard')
      },
      err => {
        console.error(err)
      }
    )
  }
}
