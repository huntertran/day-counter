import { Injectable } from '@angular/core';
import store from 'store2';
import { User, UserList } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // a unique key to prevent user create the same key for category
    private static readonly USER_LIST_KEY: string = 'userlist-e6fc2693-a4fe-400a-8a00-7317b1f5bf98';
    private static _user: User;

    public static setUser(user: User) {
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

    private static initDefaultUser(userList: UserList) {
        let defaultUser: User = {
            UserID: 'default',
            IsActive: true
        }
        userList = {
            Users: [defaultUser]
        };

        UserService._user = defaultUser;

        return userList;
    }
}
