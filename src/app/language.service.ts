

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

 
  constructor(private http:HttpClient, private router: Router) { }





  
public addLanguage(language):Observable<any> {
    return this.http.post(`http://localhost:8000/languages/language/add`, language);
}
public getLanguage(user_account_id):Observable<any> {
    return this.http.get(`http://localhost:8000/languages/language/${user_account_id}`)
}
public deleteLanguage(id):Observable<any> {
    return this.http.delete(`http://localhost:8000/languages/language/delete/${id}`)
}
public editLanguage(language,id):Observable<any> {
    return this.http.patch(`http://localhost:8000/languages/language/update/${id}`, language)
}
}
