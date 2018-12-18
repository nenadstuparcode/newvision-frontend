import { UserDetails } from './authentication.service';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient, private router: Router) { }

  public postFile(data):Observable<any> {
    return this.http.post(`http://localhost:8081/api/uploadfile`, data);
}

}
