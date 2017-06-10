import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  atHome : boolean;

  constructor() { 
    this.atHome = true;
  }

  ngOnInit() {
  }

  setHome(value : boolean){
    this.atHome = value;
  }
  getHome(){
    return this.atHome;
  }
}
