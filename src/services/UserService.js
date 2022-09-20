import apiUsers from "../http/apiUsers";

export default class UsersService {
    static async getUsers() {
        return apiUsers.get('/users')
    }
}