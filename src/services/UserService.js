import apiUsers from "../http/apiUsers";

export class UsersService {
    static async getUsers() {
        return apiUsers.get('/users?fields=id,login,name,email')
    }
}

export class UserService {
    static async getUser(userId) {
        return apiUsers.get(`/users/${userId}?fields=id,login,name,email`)
    }
}