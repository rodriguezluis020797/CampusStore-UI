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
  ) { }

  public user: UserModel = new UserModel();
  public errorMessage: string | undefined;
  public success: boolean | undefined;



  ngOnInit(): void {

  }

  saveNewUser() : void {
    this.users.createUser(this.user).subscribe(
      (result) => {
        this.success = true;
      }, (error) => {
        this.errorMessageFunc(error.error.text);
      }
    );
  }

  toLogin() : void {
    this.router.navigate(['/user-profile']);
  }


  cancel() : void {
    this.router.navigate(['']);
  }

  errorMessageFunc(message: string) : void {
    setTimeout(() => {
      this.errorMessage = message;
    }, 5000);
  }

}
