import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, UrlMatcher } from '@angular/router';
import { UserService } from 'src/services/user-service';
import { AppComponent } from '../app.component';
import { Cookies } from '../Cookies';
import { LogInModel } from '../models/login-model';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService, Cookies]
})
export class UserProfileComponent implements OnInit {

  constructor(
    private users: UserService,
    private cookies: Cookies,
    private router: Router
  ) { }

  public user: UserModel | undefined;
  public credentials: LogInModel = new LogInModel();
  @Output() showLogin = new EventEmitter<boolean>();

  public loading: boolean = false;
  public editProfile: boolean = false;
  public allowLogin: boolean = true;

  public errorMessage: string | undefined;
  public successMessage: string | undefined;

  ngOnInit() : void {
    if (this.cookies.checkUserCookie() == true) {
      this.user = this.cookies.getUserCookie();
    }
  }

  login() : void {
    if (this.allowLogin) {
      this.users.getUser(this.credentials).subscribe(
        (result) => {
          this.cookies.setUserCookie(result);
          this.user = result;
          this.router.navigate(['']);
          this.showLogin.emit(true);
          this.credentials = new LogInModel();
        }, (error) => {
          this.credentials.providedPassword = undefined;
          this.errorMessage = error.error.text;
          this.allowLogin = false;
          setTimeout(() => {
            this.allowLogin = true;
          }, 3000);
        }
      );
    }
  }

  editProfileFunc() : void {
    this.successMessage = undefined;
    this.editProfile = true;
  }

  editSave() : void {
    if (this.user) {
      this.users.updateUser(this.user).subscribe(
        (result) => {
          this.cookies.setUserCookie(result);
          this.user = result;
          this.editProfile = false;
          this.successMessageFunc("Update successful!");
        }, (error) => {
          this.errorMessage = error.error.text;
        }
      );
    }
  }

  cancelEdit() : void {
    this.user = this.cookies.getUserCookie();
    this.editProfile = false;
  }

  createProfile() : void {
    this.router.navigate(['/create-profile'])
  }

  successMessageFunc(message: string) : void {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = undefined;
    }, 5000);
  }

  changePassword() : void {
    this.router.navigate(['/user-profile/change-password']);
  }
}