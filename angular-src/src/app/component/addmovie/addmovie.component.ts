import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

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
    private router: Router) { }

  ngOnInit() {
  }

  onSubmitMovie(){
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

    this.dataService.addMovie(movie).subscribe(data => {
        console.log(data.msg)
    });
  }

}
