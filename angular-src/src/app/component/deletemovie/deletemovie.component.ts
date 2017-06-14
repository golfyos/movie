import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
  user : Object;
  mid: String

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {
     this.dataService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      this.dataService.user = this.user;
      console.log(this.user);
     if(!this.dataService.validateAdmin(this.user)){
       this.router.navigate(['/']);
     }
    }, err =>{
      console.log(err);
      return false;
    });
  }
  
  onDeleteSubmit(){
    const id = {
      id: this.mid
    }

    this.dataService.deleteMovieById(id).subscribe(data => {
        if(data.success)  console.log(data.msg)
        else console.log(data.msg)
    });
  }

  

}
