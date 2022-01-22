import { Component, OnInit } from '@angular/core';
import { Cookies } from '../Cookies';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [Cookies]
})
export class ChangePasswordComponent implements OnInit {

  public userId: number | undefined;
  private readonly userIdCookie: string = "user-id-cookie";

  constructor(
    private cookies: Cookies
  ) { }

  ngOnInit(): void {
    this.userId = this.cookies.getUserIdCookie();
  }

}