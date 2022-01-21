import { HttpClient, HttpClientModule, ɵHttpInterceptingHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'', component:HomeComponent},
        {path:'user-profile', component: UserProfileComponent}
      ]
    )
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
