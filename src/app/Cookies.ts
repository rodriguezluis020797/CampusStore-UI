import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { UserModel } from "./models/UserModel";

@Injectable()

export class Cookies{
    private readonly userCookie: string = "user-cookie";
    private readonly userIdCookie: string = "user-id-cookie";
    constructor(
        private cookies: CookieService,
    ){}

    public deleteAllCookies() : void {
        this.cookies.deleteAll();
    }

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
        if(user.userId){
            this.setUserIdCookie(user.userId);
        }
    }
    public removeUserCookie(){
        this.cookies.delete(this.userCookie);
    }
    public setUserIdCookie(userId: number) : void {
        this.cookies.set(this.userIdCookie, userId.toString());
    }
    public getUserIdCookie() : number {
        return Number(this.cookies.get(this.userIdCookie));
    }
    /*
    End of user cookie functions
    */

}