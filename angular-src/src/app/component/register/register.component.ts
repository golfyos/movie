import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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

  constructor(private dataService: DataService
    , private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,
      repassword: this.repassword,
      status: 0
    }
    //Required Fields
    if (!this.dataService.validateRegister(user)) {
      this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 2000 });
      return false;
    }
    //Validate Email
    if (!this.dataService.validateEmail(user.email)) {
      this.flashMessage.show("Please use a valid Email", { cssClass: 'alert-danger', timeout: 2000 });
      return false;
    }
    //Check password match
    if (!this.dataService.validatePassword(user.password, user.repassword)) {
      this.flashMessage.show("Your password does not match with the re-type password", { cssClass: 'alert-danger', timeout: 2000 });
      return false;
    }

    //Register User
    this.dataService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("You are now registered!", { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 2000 });
        this.router.navigate(['/register']);
      }
    });

  }
}
