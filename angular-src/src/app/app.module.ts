import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {tokenNotExpired} from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CategoryComponent } from './component/category/category.component';
import { MovieComponent } from './component/movie/movie.component';
import { AddmovieComponent } from './component/addmovie/addmovie.component';
import { EditComponent } from './component/edit/edit.component';
import { DeletemovieComponent } from './component/deletemovie/deletemovie.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { MovielistComponent } from './component/movielist/movielist.component';

import {DataService} from './services/data.service';

const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'category' , component : CategoryComponent},
  {path : 'movie' , component : MovieComponent},
  {path : 'userprofile' , component : UserprofileComponent},
  {path : 'movie/:id' , component : MovieComponent},
  {path : 'profile' , component : UserprofileComponent},
  {path : 'addmovie' , component : AddmovieComponent},
  {path : 'editmovie' , component : EditComponent},
  {path : 'deletemovie' , component : DeletemovieComponent},
  {path : 'movielist/:category', component : MovielistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    MovieComponent,
    AddmovieComponent,
    EditComponent,
    DeletemovieComponent,
    UserprofileComponent,
    MovielistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
