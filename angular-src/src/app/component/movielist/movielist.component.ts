import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movie: Object;
  constructor( 
      private dataService:DataService,
      private router:Router,
      private route: ActivatedRoute
    ){
   }

   cate : String
  ngOnInit() {
      this.route.params.subscribe(params => {
        this.cate = params["category"];
        // console.log(params["id"]);
      });
      // console.log(this.cate);
      if(this.cate=="all"){
        this.dataService.getAllMovie().subscribe(data=>{
          if(data){
            this.movie = data;
            // console.log(data)
          }
        });
      }
      
      else{
        // console.log(this.cate);
        this.dataService.getCategoryMovie(this.cate).subscribe(data=>{
          if(data){
            this.movie = data.data;
            // console.log(data)
          }
        });
      }

  }

}
