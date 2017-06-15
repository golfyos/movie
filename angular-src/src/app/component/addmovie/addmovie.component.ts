import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  user: Object;
  id: String
  name: String
  poster: String
  trailer: String
  description: String
  cast: String
  category: String
  rating: String
  rd: String
  constructor(
    private dataService: DataService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.dataService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.dataService.user = this.user;
      console.log(this.user);
      if (!this.dataService.validateAdmin(this.user)) {
        this.router.navigate(['/']);
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

  onSubmitMovie() {
    const movie = {
      mid: this.id,
      name: this.name,
      poster: this.poster,
      trailer: this.trailer,
      description: this.description,
      cast: this.cast,
      rd: this.rd,
      category: this.category,
      rating: this.rating
    }

    if (!this.dataService.validateMovie(movie)) {
      this.flashMessage.show("Please fill in all required field", { cssClass: 'alert-danger', timeout: 2000 });
      return false;
    }
      this.dataService.addMovie(movie).subscribe(data => {
      this.flashMessage.show(movie.name + " is added", { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/movie/' + movie.mid]);
      });
  }

}
