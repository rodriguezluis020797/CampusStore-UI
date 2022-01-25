import { Component, OnInit } from '@angular/core';
import { Cookies } from './Cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Cookies]
  
})
export class AppComponent implements OnInit {

  constructor(private cookies: Cookies) { }

  ngOnInit(): void {

  }

  
 

  public logOut() {
    if(this.cookies.checkUserCookie() == true){
      this.cookies.deleteAllCookies();
    }
  }

}
