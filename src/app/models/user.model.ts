import { User } from "firebase/auth";

export interface LocalUser {
    UserID: string;
    IsActive: boolean;

    LoggedIn: User | undefined;
}

export interface UserList {
    Users: LocalUser[];
}