import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Object;
  constructor(private dataService: DataService,
    private router: Router,
    private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
      this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = profile.user;
      if(!this.dataService.validateAdmin(this.user)){
       this.dataService.grant = false;
      }else this.dataService.grant = true;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onLogoutClick() {
    this.dataService.logout();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['login']);
    return false;
  }

  search: String
  onSubmitSearch(){
    let temp = this.search.split(" ");
    let strJoin = temp.join("+");
    this.router.navigate(['movielist/'+ encodeURI(strJoin)]);
  }
}
