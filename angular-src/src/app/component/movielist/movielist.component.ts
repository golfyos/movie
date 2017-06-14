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
      this.dataService.user = this.user;
    }, err => {
      console.log(err);
      return false;
    });
    this.route.params.subscribe(params => {
      this.cate = params["category"];
      // console.log(params["id"]);
    });
    // console.log(this.cate);
    if (this.cate == "all") {
      this.dataService.getAllMovie().subscribe(data => {
        if (data) {
          this.movie = data;
          this.count = Object.keys(this.movie).length;
          // console.log(data)
        }
      });
    }

    else {
      // console.log(this.cate);
      this.dataService.getCategoryMovie(this.cate).subscribe(data => {
        if (data) {
          this.movie = data.data;
          // console.log(data)
        }
      });
    }
  }
}
