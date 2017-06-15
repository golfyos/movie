import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: Object;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  key: String
  movie: Object;
  ngOnInit() {
    this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = this.user;
    }, err => {
      console.log(err);
      return false;
    });

    this.route.params.subscribe(params => {
      
      // this.key = params["key"];
      // let temp = params["key"];
      let temp = params["key"].split("+");
      let strJoin = temp.join(" ");
      this.key = strJoin;
      const word = {
        key:this.key
      }
      // console.log(word);
      // console.log(params["id"]);
      this.dataService.searchKeyWord(word).subscribe(data => {
        // console.log(data.success);
          if (data.success) {
            // console.log(data.data);
            this.movie = data.data;
          }
      });
    });

  }
}