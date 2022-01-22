import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service';
import { AppComponent } from '../app.component';
import { Cookies } from '../Cookies';
import { LogInModel } from '../models/login-model';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers:[UserService, Cookies]
})
export class UserProfileComponent implements OnInit {

  constructor(
    private users: UserService,
    private cookies: Cookies,
    private router: Router

  ) {}

  public user: UserModel | undefined;
  public credentials: LogInModel = new LogInModel();
  public loading: boolean = false;
  public errorMessage: string | undefined;



  ngOnInit(): void {

    if(this.cookies.checkUserCookie() == true){
    this.user = this.cookies.getUserCookie();
    }
  }

  login() : void {
    this.users.getUser(this.credentials).subscribe(
    (result) => {
        this.cookies.setUserCookie(result);
        this.user = result;
        this.router.navigate(['']);
        this.credentials = new LogInModel();
      }, (error) => {
        this.credentials.providedPassword = undefined;
        this.errorMessage = error.error.text;
      }
    );
  }

  createProfile() : void {
    this.router.navigate(['/create-profile'])
  }



}
