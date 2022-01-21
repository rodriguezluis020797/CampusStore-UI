import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { UserModel } from "./models/UserModel";

@Injectable()

export class Cookies{
    constructor(
        private cookies: CookieService,
    ){}

    public setUserCookie(user: UserModel){
        this.cookies.set("user", JSON.stringify(user));
    }

    public removeUserCookie(){
        this.cookies.delete("user");
    }

}