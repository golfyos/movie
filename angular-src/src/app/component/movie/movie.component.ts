import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService:DataService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  mid : String;
  movieData : Object;
  url : SafeResourceUrl;
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.mid = params["id"];
      // console.log(params["id"]);
    });

    this.dataService.getMovieById(this.mid).subscribe(dataJson=>{
      if(dataJson.success){
        // console.log(dataJson.data);
        this.movieData = dataJson.data;
        
        // console.log(dataJson.data.name);
        // this.movie = data.data; 
        // this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ dataJson.data.trailer);
        // console.log(this.url);
      }
    });
    
  }

  // changeUrl(trailer) {
  //   let url = "https://www.youtube.com/embed/"+trailer;
  //   this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }

}
