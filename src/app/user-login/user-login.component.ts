import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { data } from 'jquery';



@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent{

  user:User = new User();
  constructor(private loginuserservice: LoginuserService){}

  

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      console.log(data);
      alert("login succed");
    }//, error=>alert("something wrong restart")); // only for V13
  
  }
  regOnInit(): void{}

}
