import { AuthenticationService, UserDetails } from './../authentication.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
details: UserDetails
  constructor(private auth:AuthenticationService) {
  
  }

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
