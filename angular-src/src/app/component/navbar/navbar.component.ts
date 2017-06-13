import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user : Object;
  atHome : boolean;

  constructor(private dataService : DataService,
              private router : Router,
              private flashMessage:FlashMessagesService) { 
    this.atHome = true;
  }

  ngOnInit() {
    this.dataService.getProfile().subscribe(profile =>{
      this.user = profile.user;
    }, err =>{
      console.log(err);
      return false;
    });
  }

  setHome(value : boolean){
    this.atHome = value;
  }
  getHome(){
    return this.atHome;
  }

  onLogoutClick(){
    this.dataService.logout();
    this.flashMessage.show('You are logged out',{cssClass : 'alert-success',timeout:3000});
    this.router.navigate(['/login']);
    return false;
  }

}
