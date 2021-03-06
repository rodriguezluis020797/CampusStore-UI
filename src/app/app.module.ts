import { HttpClient, HttpClientModule, ÉµHttpInterceptingHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    CreateProfileComponent,
    ChangePasswordComponent,
    ItemsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'', component:HomeComponent},
        {path:'user-profile', component: UserProfileComponent},
        {path:'create-profile', component: CreateProfileComponent},
        {path:'user-profile/change-password', component: ChangePasswordComponent}
      ]
    )
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
