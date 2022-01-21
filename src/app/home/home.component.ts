import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user-service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
