import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from './../authentication.service';
@Component({
  selector: 'app-dashboard-employer',
  templateUrl: './dashboard-employer.component.html',
  styleUrls: ['./dashboard-employer.component.css']
})
export class DashboardEmployerComponent implements OnInit {
  details:UserDetails
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
