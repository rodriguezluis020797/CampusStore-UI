import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { UserModel } from "./models/UserModel";

@Injectable()

export class Cookies{
    private readonly userCookie: string = "user-cookie";
    constructor(
        private cookies: CookieService,
    ){}

    /**
     * 
     * @returns user cookie functions
     */
    public checkUserCookie() : boolean {
        if(this.cookies.get(this.userCookie).length > 0){
            return true;
        }
        return false;
    }
    
    public getUserCookie() : UserModel {
        return JSON.parse(this.cookies.get(this.userCookie));
    }

    public setUserCookie(user: UserModel){
        this.cookies.set(this.userCookie, JSON.stringify(user));
    }

    public removeUserCookie(){
        this.cookies.delete(this.userCookie);
    }

    /*
    End of user cookie functions
    */

}