import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl:string ="http://localhost:8081/user/login";
  constructor(private httpclient: HttpClient) { }



  loginUser(user: User):Observable<object>{
    console.log(user)
    //return this.httpclient.post('${this.baseUrl}', user); for V13
    return this.httpclient.post(this.baseUrl, user);
  }
}  
