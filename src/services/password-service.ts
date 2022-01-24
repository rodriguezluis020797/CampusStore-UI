
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PasswordChangeModel } from "src/app/models/password-change-model";

@Injectable()

export class PasswordService {
    readonly devUrl: string = "https://localhost:5001";
    readonly prodUrl: string = "";

    constructor(
        private http: HttpClient
    ) { }

    public setPassword(passwordChangeModel: PasswordChangeModel): Observable<boolean>{
        return this.http.post<boolean>(this.devUrl+'/userpasswordhashes/setpassword', passwordChangeModel);
    }

    public changePassword(passwordChangeModel: PasswordChangeModel): Observable<boolean>{
        return this.http.put<boolean>(this.devUrl+'/userpasswordhashes/changepassword', passwordChangeModel);
    }

    public resetPassword(eMail: string): Observable<boolean>{
        return this.http.get<boolean>(this.devUrl+'/userpasswordhashes/resetpassword/' + eMail)
    }
}