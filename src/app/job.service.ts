import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class JobService {
   
   details:UserDetails

  constructor(private http: HttpClient, private router:Router) {}



    public addJob(job): Observable<any>{
      return this.http.post(`http://localhost:8000/jobposts/jobpost/add`, job)
    }
    public getJob(id): Observable<any> {
      return this.http.get(`http://localhost:8000/jobposts/jobpost/${id}`)
    }
    public deleteJob(id): Observable<any>{
      return this.http.delete(`http://localhost:8000/jobposts/jobpost/delete/${id}`)
    }
    public editJob(job,id):Observable<any> {
      return this.http.patch(`http://localhost:8000/jobposts/jobpost/update/${id}`, job)
  }
  
}
