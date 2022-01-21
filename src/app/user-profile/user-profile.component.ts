import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user-service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers:[UserService]
})
export class UserProfileComponent implements OnInit {

  constructor(
    private users: UserService
  ) { }

  public user: UserModel | undefined;
  public providedEmail: String | undefined;
  public providedPassword: String | undefined;
  
  public loading: boolean = false;


  ngOnInit(): void {



  }

  login() : void{
    console.log(this.providedEmail);
    console.log(this.providedPassword);
  }



}
