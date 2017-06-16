import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  category : String;
  count: number;
  round: number;
  list: String;
  user: Object;
  movie: Object;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef : ElementRef,
  ) {
    this.list = "";
    
  }

  cate: String
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
    this.route.params.subscribe(params => {
      this.cate = params["category"];
    });
    if (this.cate == "all") {
      this.dataService.getAllMovie().subscribe(data => {
        if (data) {
          this.movie = data;
          this.count = Object.keys(this.movie).length;
        }
      });
    }
    else if(this.cate =="latest"|| this.cate=="trend"){
      this.dataService.sortMovie(this.cate).subscribe(data => {
        if (data) {
          this.movie = data.data;
          this.cate = this.cate=="latest"?"Latest":"Trend";
        }
      });
    }
    else {
      this.dataService.category = this.cate;
      this.dataService.getCategoryMovie(this.cate).subscribe(data => {
        if (data) {
          this.movie = data.data;
        }
      });
    }
  }
}
