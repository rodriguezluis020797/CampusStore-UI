import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service';
import { Cookies } from '../Cookies';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  providers: [UserService, Cookies]
  
})
export class CreateProfileComponent implements OnInit {

  constructor(
    private users: UserService,
    private router: Router,
    private cookies: Cookies
  ) { }

  public user: UserModel = new UserModel();
  public errorMessage: string | undefined;

  ngOnInit(): void {

  }

  saveNewUser() : void {
    this.users.createUser(this.user).subscribe(
      (result) => {
        this.cookies.setUserCookie(result);
        this.router.navigate(['']);
      }, (error) => {
        
      }
    );
  }


  cancel() : void {
    this.router.navigate(['']);
  }



}
