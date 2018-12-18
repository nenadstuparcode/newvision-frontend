import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails} from "./../authentication.service"
@Component({
  selector: 'app-sidebar-employer',
  templateUrl: './sidebar-employer.component.html',
  styleUrls: ['./sidebar-employer.component.css']
})
export class SidebarEmployerComponent implements OnInit {
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
