
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PasswordChangeModel } from "src/app/models/password-change-model";

@Injectable()

export class PasswordService {
    readonly devUrl: string = "https://localhost:5001";
    readonly prodUrl: string = "https://campus-store-api.azurewebsites.net";

    constructor(
        private http: HttpClient
    ) { }

    public setPassword(passwordChangeModel: PasswordChangeModel): Observable<boolean>{
        return this.http.post<boolean>(this.prodUrl+'/userpasswordhashes/setpassword', passwordChangeModel);
    }

    public changePassword(passwordChangeModel: PasswordChangeModel): Observable<boolean>{
        return this.http.put<boolean>(this.prodUrl+'/userpasswordhashes/changepassword', passwordChangeModel);
    }

    public resetPassword(eMail: string): Observable<boolean>{
        return this.http.get<boolean>(this.prodUrl+'/userpasswordhashes/resetpassword/' + eMail)
    }
}