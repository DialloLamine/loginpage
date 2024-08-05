import { Component } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  user:User = new User();
  constructor(private loginuserservice: LoginuserService){}

  regOnInit(): void{}

  userLogin(){
    console.log(this.user);
  
  }
}
