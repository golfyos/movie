import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  user : Object;
  movie: Object;
  constructor( 
      private dataService:DataService,
      private router:Router,
      private route: ActivatedRoute
    ){
   }

   cate : String
  ngOnInit() {
      this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      if(!this.dataService.validateAdmin(this.user)){
       this.dataService.grant = false;
      }else this.dataService.grant = true;
    }, err => {
      console.log(err);
      return false;
    });
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
