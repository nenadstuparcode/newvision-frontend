import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  details:UserDetails
  constructor(private http:HttpClient, private router: Router) { }



  public addEducation(education):Observable<any> {
      return this.http.post(`http://localhost:8000/educations/add-education`, education);
  }
  public getEducation(user_account_id):Observable<any> {
      return this.http.get(`http://localhost:8000/educations/education/${user_account_id}`)
  }
  public deleteEducation(id):Observable<any> {
      return this.http.delete(`http://localhost:8000/educations/education/delete/${id}`)
  }
  public editEducation(education,id):Observable<any> {
      return this.http.patch(`http://localhost:8000/educations/education/update/${id}`, education)
  }

}
