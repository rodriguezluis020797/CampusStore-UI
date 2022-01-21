import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user-service';
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

  ) { }

  public user: UserModel | undefined;
  public credentials: LogInModel = new LogInModel();
  
  public loading: boolean = false;


  ngOnInit(): void {

    

  }

  login() : void{
    this.credentials.providedEmail = "lurodrig@linfield.edu";

    this.users.getUser(this.credentials.providedEmail).subscribe(
      (result) => {
        this.user = result;
        this.cookies.setUserCookie(this.user);
        this.credentials = new LogInModel();
      }, (error) => {
        this.credentials.providedPassword = undefined;
      }
    );
  }



}
