import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogInModel } from "src/app/models/login-model";
import { UserModel } from "src/app/models/UserModel";

@Injectable()

export class UserService{

    constructor(
        private http: HttpClient
    ) { }

    public getUser(loginInfo: LogInModel): Observable<UserModel> {
        return this.http.put<UserModel>('https://localhost:5001/users/getuser/', loginInfo);
    }
    
}