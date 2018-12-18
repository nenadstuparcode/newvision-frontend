import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  details: UserDetails

  constructor(private auth:AuthenticationService) { }

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
