import { AuthenticationService, UserDetails } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ["../../assets/styles/pricing/plans.min.css", "./pricing-plan.component.css"]
})
export class PricingPlanComponent implements OnInit {

  details: UserDetails

  constructor(private auth: AuthenticationService) {}

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
