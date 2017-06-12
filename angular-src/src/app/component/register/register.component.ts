import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  repassword: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,
      repassword : this.repassword,
      status: 0
    }
    //Required Fields
    if (!this.dataService.validateRegister(user)){
      alert("Please fill in all fields");
      return false;
    }
     //Validate Email
    if (!this.dataService.validateEmail(user.email)){
      alert("Invalid Email Format");
      return false;
    }
     //Check password match
    if (!this.dataService.validatePassword(user.password,user.repassword)){
      alert("Please make sure to re-type your password correctly");
      return false;
    }
  }
}
