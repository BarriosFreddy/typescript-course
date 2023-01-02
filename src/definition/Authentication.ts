import { User } from "../model/User";

export interface Authentication {
    login(username:string, password:string): User | null;
}