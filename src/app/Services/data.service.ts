import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { AppError } from './Commun/app-error';
import { BadInput } from './Commun/bad-input-error';
import { NotFoundError } from './Commun/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   // Inject ApiUrl in constructor to Get it form ather Service
   constructor(@Inject(String) private APIUrl: string,private http: HttpClient) { }


  // Get Method
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.APIUrl);
  }
  //get with id
  get(id: any): Observable<User> {
    return this.http.get(`${this.APIUrl}/${id}`);
  }
  // Update Method
  Update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/${id}`, data);
  }

  //Create Method
  Create(data: any): Observable<any> {
    return this.http.post(this.APIUrl, data);
  }

  //Delete Method
  Delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
  }
