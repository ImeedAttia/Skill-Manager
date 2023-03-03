import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  //Api url
  const  APIUrl ="http://localhost:8080/api/users/login";
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http:HttpClient){}

  signIn(data :{email : string,password : string}): Observable<any>{
    return this.http.post(APIUrl, data)
  }
  
  signOut(): void {
    window.sessionStorage.clear();
  }

}
