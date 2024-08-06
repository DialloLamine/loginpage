import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import de FormsModule
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logingPage';
}

@NgModule({
 

  imports: [
    AppComponent,
    BrowserModule,
    FormsModule ,// Ajout de FormsModule dans les imports
    HttpClient // not work for version V18 only for V13
  ],
})

export class AppModule { }








