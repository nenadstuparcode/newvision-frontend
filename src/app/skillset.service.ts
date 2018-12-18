import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SkillsetService {

 
  constructor(private http:HttpClient, private router: Router) { }





  
public addSkillset(skillset):Observable<any> {
    return this.http.post(`http://localhost:8000/skillsets/skillset/add`, skillset);
}
public getSkillset(user_account_id):Observable<any> {
    return this.http.get(`http://localhost:8000/skillsets/skillset/${user_account_id}`)
}
public deleteSkillset(id):Observable<any> {
    return this.http.delete(`http://localhost:8000/skillsets/skillset/delete/${id}`)
}
public editSkillset(skillset,id):Observable<any> {
    return this.http.patch(`http://localhost:8000/skillsets/skillset/update/${id}`, skillset)
}
}
