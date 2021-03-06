import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  mid: String;
  movieData: Object;
  url: SafeResourceUrl;

  comment: String;
  user: Object;
  fname: String;
  lname: String;

  videoUrl: SafeResourceUrl;
  ngOnInit() {
    this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.fname = profile.user.firstname;
      this.lname = profile.user.lastname;
      this.dataService.user = this.user;
      console.log(this.user);
      if (!this.dataService.validateAdmin(this.user)) {
        this.dataService.grant = false;
      } else this.dataService.grant = true;
    }, err => {
      console.log(err);
      return false;
    });
    this.route.params.subscribe(params => {
      this.mid = params["id"];
      // console.log(params["id"]);
    });

    this.dataService.getMovieById(this.mid).subscribe(dataJson => {
      if (dataJson.success) {
        this.movieData = dataJson.data;
        let url = "https://www.youtube.com/embed/" + dataJson.data.trailer;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(this.videoUrl);
      }
    });


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

  }

  onCommentSubmit() {
    let u = this.user;
    
    const d = {
      mid: this.mid,
      name: this.fname + "  " + this.lname,
      comment: this.comment
    }

    this.dataService.addReview(d).subscribe(resJson => {
      console.log(resJson.success);
          this.dataService.getMovieById(this.mid).subscribe(dataJson => {
            if (dataJson.success) {
              this.movieData = dataJson.data;
              this.comment = "";
            }
          });
    });
  }

  changeUrl(trailer) {
    console.log(trailer);
    let url = "https://www.youtube.com/embed/" + trailer;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.videoUrl);
  }

}
