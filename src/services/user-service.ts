import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogInModel } from "src/app/models/login-model";
import { UserModel } from "src/app/models/UserModel";

@Injectable()

export class UserService{

    readonly devUrl: string = "https://localhost:5001";
    readonly prodUrl: string = "https://campus-store-api.azurewebsites.net";

    constructor(
        private http: HttpClient
    ) { }

    public getUser(loginInfo: LogInModel): Observable<UserModel> {
        return this.http.put<UserModel>(this.prodUrl+'/users/getuser/', loginInfo);
    }

    public updateUser(user: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(this.prodUrl+'/users/updateuser/', user);
    }

    public createUser(user: UserModel): Observable<UserModel>{
        return this.http.post<UserModel>(this.prodUrl+'/users/createuser/', user);
    }
    
}