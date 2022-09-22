import api from "../http/api";

export class UsersService {
    static async getUsers() {
        return api.get('/users?fields=id,login,name,email')
    }
}

export class UserService {
    static async getUser(userId) {
        return api.get(`/users/${userId}?fields=id,login,name,email`)
    }
}