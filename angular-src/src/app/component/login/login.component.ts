import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Location } from '@angular/common';

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
              private flashMessage:FlashMessagesService,
              private location:Location
              ) 
              { }

   onLoginSubmit(){
     const user={
       username : this.username,
       password : this.password
     }
     this.dataService.authenticateUser(user).subscribe(data =>{
        if(data.success){
          this.dataService.storeUserData(data.token,data.user);
           this.flashMessage.show('You are now Logged In',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['']);
          this.location.back();
        }else{
          this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['login']);
        }
     });
   }

}
