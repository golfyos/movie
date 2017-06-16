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
  result: Number;
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

      let temp = params["key"].split("+");
      let strJoin = temp.join(" ");
      this.key = strJoin;
      const word = {
        key:this.key
      }

      this.dataService.searchKeyWord(word).subscribe(data => {
          if (data.success) {
            this.movie = data.data;
            this.result = data.data.length;
          }
      });
    });

  }
}