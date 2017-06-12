import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  authToken : any;
  user : any;
  constructor(private http:Http) { }

  validateRegister(user){
    if(user.firstname == undefined || user.lastname == undefined ||
    user.username == undefined ||user.email == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password,repassword){
    if(password !== repassword){
      return false;
    }
    else return true;
  }

  registerUser(user){
      let headers = new Headers();
      headers.append("Content-Type","application/json");
      return this.http.post("http://localhost:3000/user/register",user,{headers : headers})
      .map(res => res.json());
  }
  getAllMovie(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/data',{headers:headers})
    .map(res => res.json());
  }

}
