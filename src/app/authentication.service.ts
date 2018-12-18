
import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface JobDetails {
  user_account_id:number
  created_date: number
  job_title: string
  job_description: string
  job_deadline: number
  job_profession: string
  job_position: string
  job_city: string
  job_country: string
  job_description_full: string
}
export interface DriverLicenceDetails {
  user_account_id:number
  dr_licence_name:string
  dr_licence_type:string
}
export interface LanguageDetails {
  user_account_id:number
  language_name:string
  language_level:number
}
export interface SkillsetDetails {
  user_account_id:number
  skill_set_name:string
}

export interface EducationDetails {
  user_account_id:number
  certificate_degree_name:string
  Institute_university_name:string
  starting_date:number
  completion_date:number
  education_desc:string
}
export interface ExperienceDetails  {
  user_account_id:number
  company_name:string
  job_position: string
  start_date: number
  end_date: number
  job_description: string
 }

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  exp: number
  iat: number
  contact_number: string
  user_type_id: string
  date_of_birth:string
  gender: string
  city:string
  address: string
  country: string
  short_desc:string
  profession_type_name:string
}


interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  contact_number: string
  user_type_id: number
  date_of_birth:string
  city:string
  address: string
  country: string
  gender: string
  company_name:string
  profession_type_name: string
 
}

export interface EditData {
  id:number
  password:string
  date_of_birth:string
  gender:string
  contact_number: string
  first_name:string
  last_name:string
  city:string
  country:string
  address:string

}

@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}  

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }
 
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public getUserID(){
    const user = this.getUserDetails()
    return user.id
  }
  public isCompany(): boolean {
    const user = this.getUserDetails();
    if (user.user_type_id == "2") { 
      return true
    } else {
      return false
    }
  }

  public isPerson(): boolean {
    const user = this.getUserDetails();
    if(user.user_type_id == "1") {
      return true
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/register`, user)
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/users/login`, user)
    console.log(user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(`/users/profile`, {
      headers: { Authorization: ` ${this.getToken()}`}
    })
  }

  public edit(id, user): Observable<any> {    
     return this.http.patch(`http://localhost:8000/users/edit/${id}`,user )
  }
  


  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }


  public update(job) {
    return this.http.put(`jobtypes/addjobtype` , job)
  }

  public addJob(job): Observable<any>{
      return this.http.post(`/jobtypes/addjobtype`, job)
  }
}
 
