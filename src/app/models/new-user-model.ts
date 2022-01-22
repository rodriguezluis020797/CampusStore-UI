import { UserModel } from "./UserModel";

export class NewUserModel{
    user: UserModel | undefined;
    tempPassword: string | undefined;
}