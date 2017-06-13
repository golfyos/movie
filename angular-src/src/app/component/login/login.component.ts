import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username : String;
  password : String;

  constructor(private dataService : DataService,
              private router : Router,
              private flashMessage:FlashMessagesService) 
              { }

   onLoginSubmit(){
     const user={
       username : this.username,
       password : this.password
     }
     this.dataService.authenticateUser(user).subscribe(data =>{
        console.log(data);
     });
    // this.dataService.authenticateUser(user);
   }

}
