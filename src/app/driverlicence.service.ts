


import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DriverlicenceService {

 
  constructor(private http:HttpClient, private router: Router) { }





  
public addDriverLicence(driverlicence):Observable<any> {
    return this.http.post(`http://localhost:8000/driverlicences/driverlicence/add`, driverlicence);
}
public getDriverLicence(user_account_id):Observable<any> {
    return this.http.get(`http://localhost:8000/driverlicences/driverlicence/${user_account_id}`)
}
public deleteDriverLicence(id):Observable<any> {
    return this.http.delete(`http://localhost:8000/driverlicences/driverlicence/delete/${id}`)
}
public editDriverLicence(driverlicence,id):Observable<any> {
    return this.http.patch(`http://localhost:8000/driverlicences/driverlicence/update/${id}`, driverlicence)
}
}
