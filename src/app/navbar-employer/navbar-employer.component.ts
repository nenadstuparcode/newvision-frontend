import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails} from "./../authentication.service"
@Component({
  selector: 'app-navbar-employer',
  templateUrl: './navbar-employer.component.html',
  styleUrls: ['./navbar-employer.component.css']
})
export class NavbarEmployerComponent implements OnInit {
details: UserDetails;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

}
