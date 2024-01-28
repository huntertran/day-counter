import { Injectable } from '@angular/core';
import store from 'store2';
import { LocalUser, UserList } from '../models/user.model';
import { IdTokenResult, User } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // a unique key to prevent user create the same key for category
    private static readonly USER_LIST_KEY: string = 'userlist-e6fc2693-a4fe-400a-8a00-7317b1f5bf98';
    public static _user: LocalUser;

    public static setUser(user: LocalUser) {
        UserService._user = user;
    }

    public static listUser(): UserList {
        let userList: UserList = store.get(UserService.USER_LIST_KEY);

        // First use
        if (userList == undefined || userList.Users.length == 0) {
            userList = UserService.initDefaultUser(userList);
        }

        return userList;
    }

    public static mergeLocalUser(loggedInUser: User): void {
        UserService._user.LoggedIn = loggedInUser;
    }

    private static initDefaultUser(userList: UserList) {
        let defaultUser: LocalUser = {
            UserID: 'default',
            IsActive: true,
            LoggedIn: undefined
        }
        userList = {
            Users: [defaultUser]
        };

        UserService._user = defaultUser;

        return userList;
    }
}
