import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const ID_KEY = 'auth-id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  public saveToken(token : string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUser(id : string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public saveInfo(id : string,token : string) : void {
    this.saveToken(token);
    this.saveUser(id);
  }

  public getUser():string | null{
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(ID_KEY) : null;
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null ? window.sessionStorage.getItem(TOKEN_KEY) : null;
  }

}
