import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogInModel } from "src/app/models/login-model";
import { UserModel } from "src/app/models/UserModel";

@Injectable()

export class UserService{

    readonly devUrl: string = "https://localhost:5001";
    readonly prodUrl: string = "";

    constructor(
        private http: HttpClient
    ) { }

    public getUser(loginInfo: LogInModel): Observable<UserModel> {
        return this.http.put<UserModel>(this.devUrl+'/users/getuser/', loginInfo);
    }

    public updateUser(user: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(this.devUrl+'/users/updateuser/', user);
    }

    public createUser(user: UserModel): Observable<UserModel>{
        return this.http.post<UserModel>(this.devUrl+'/users/createuser/', user);
    }
    
}