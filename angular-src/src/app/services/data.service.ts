import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable()
export class DataService {
  authToken : any;
  user : any;
  movie : any;
  grant : boolean;
  category : String;
  constructor(private http:Http,private router:Router) { }

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

  validateAdmin(user){
    if(user.status === 1){
      return true;
    }
    else{
      return false;
    }
  }

  validateMovie(movie){
    if(movie.mid == undefined || movie.name == undefined
    || movie.poster == undefined || movie.trailer == undefined
    || movie.description == undefined || movie.cast == undefined
    || movie.rd == undefined || movie.category == undefined
    || movie.rating == undefined){
        return false;
    }else return true;
  }

  setCat(category){
    this.category = category;
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

  getCategoryMovie(category){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/data/category/'+category,{headers:headers})
    .map(res => res.json());
  }

  getMovieById(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    
    return this.http.get('http://localhost:3000/data/movie/'+id,{headers:headers})
    .map(res => res.json());
  }
  authenticateUser(user){
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/login', user, { headers: headers })
      .map(res => res.json());
  }
  
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/user/profile',{ headers: headers})
    .map(res => res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   loggedIn(){
    return tokenNotExpired("id_token");
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    // this.router.navigate(['/login']);
  }

  addReview(comment){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/data/addreview',comment,{headers:headers})
      .map(res => res.json());
  }

  addMovie(movie){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/admin/addmovie',movie,{headers:headers})
      .map(res => res.json());
  }

  deleteMovieById(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/admin/deletemovie',id,{headers:headers})
      .map(res => res.json());
  }

  searchKeyWord(key){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/data/search',key,{headers:headers})
      .map(res => res.json());
  }

  sortMovie(cate){
    if(cate == "latest"){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/data/sort/date',{headers:headers})
        .map(res => res.json());
    }else{
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/data/sort/rate',{headers:headers})
        .map(res => res.json());
    }
  }
}
