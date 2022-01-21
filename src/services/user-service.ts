import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/models/UserModel";

@Injectable()

export class UserService{

    constructor(
        private http: HttpClient
    ) { }

    public getUser(userId: Number): Observable<UserModel> {
        return this.http.get<UserModel>('https://localhost:5001/users/getuser/' + userId);
    }
    
    }