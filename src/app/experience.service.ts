import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient, private router: Router) { }





  
public addExperience(experience):Observable<any> {
    return this.http.post(`http://localhost:8000/experiences/experience/add`, experience);
}
public getExperience(user_account_id):Observable<any> {
    return this.http.get(`http://localhost:8000/experiences/experience/${user_account_id}`)
}
public deleteExperience(id):Observable<any> {
    return this.http.delete(`http://localhost:8000/experiences/experience/delete/${id}`)
}
public editExperience(experience,id):Observable<any> {
    return this.http.patch(`http://localhost:8000/experiences/experience/update/${id}`, experience)
}
}
