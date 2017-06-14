import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  user : Object;
  constructor(private dataService : DataService) { }

  ngOnInit() {
      this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = this.user;
      if (!this.dataService.validateAdmin(this.user)) {
        this.dataService.grant = false;
      } else this.dataService.grant = true;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
