import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";




@Component({
  templateUrl: "./register.component.html",
  styleUrls:['../../assets/styles/pages/auth.min.css', './register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    contact_number:'', 
    date_of_birth: "",
    user_type_id: 0 , 
    city: '',
    address: '',
    country: '',
    gender: '',
    company_name: '',
    profession_type_name: ''



  };

  constructor(private auth: AuthenticationService, private router: Router) {}
 isColapsed: boolean = true;
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }

  toggleCollapse(){
    this.isColapsed = !this.isColapsed;
  }
}
