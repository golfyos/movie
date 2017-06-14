import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user : Object;

  constructor(private dataService : DataService,private router : Router) { }

  ngOnInit() {
      this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = this.user
      if(!this.dataService.validateAdmin(this.user)){
       this.dataService.grant = false;
      }else this.dataService.grant = true;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
