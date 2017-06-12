import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movie: Object;
  constructor( 
      private dataService:DataService,
      private router:Router
    ){
   }

  ngOnInit() {
      this.dataService.getAllMovie().subscribe(data=>{
        if(data){
          this.movie = data;
        }
      });
  }

}
