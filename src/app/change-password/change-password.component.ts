import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from 'src/services/password-service';
import { Cookies } from '../Cookies';
import { PasswordChangeModel } from '../models/password-change-model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [Cookies, PasswordService]
})
export class ChangePasswordComponent implements OnInit {

  public userId: number | undefined;
  private readonly userIdCookie: string = "user-id-cookie";

  constructor(
    private cookies: Cookies,
    private passwords: PasswordService,
    private router: Router
  ) { }

  public passwordChangeModel: PasswordChangeModel = new PasswordChangeModel();
  public newPasswordVerification: string | undefined;
  public errorMessage: string | undefined;

  ngOnInit(): void {
    this.userId = this.cookies.getUserIdCookie();
  }

  saveNewPassword() : void {

    if(this.passwordChangeModel.newPassword === this.newPasswordVerification){
      this.passwordChangeModel.userId = this.userId;
      this.passwords.changePassword(this.passwordChangeModel).subscribe(
        (result) => {
          this.passwordChangeModel = new PasswordChangeModel();
          this.router.navigate(['/user-profile']);
        }, (error) => {
          this.passwordChangeModel = new PasswordChangeModel();
          this.newPasswordVerification = undefined;
          this.errorMessageFunc(error.error.text);
        }
      );
    } else {
      this.newPasswordVerification = undefined;
      this.errorMessageFunc("Passwords must match");
    }
  }

  cancel() : void {
    this.router.navigate(['/user-profile']);
  }

  errorMessageFunc(message: string) : void {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = undefined;
    }, 5000)
  }

}