import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: Object;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = this.user;
    }, err => {
      console.log(err);
      return false;
    });
  }