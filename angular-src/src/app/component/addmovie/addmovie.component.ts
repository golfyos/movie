import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  user : Object;
  constructor(private dataService : DataService,private router : Router) { }
  
  ngOnInit() {
     this.dataService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      console.log(this.user);
     if(!this.dataService.validateAdmin(this.user)){
       this.router.navigate(['/']);
     }
    }, err =>{
      console.log(err);
      return false;
    });
  }

}
