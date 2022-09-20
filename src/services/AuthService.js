import apiAuth from "../http/apiAuth";

export default class AuthService {
    static async login(username, password) {
        return apiAuth.post(`/token/`, { username, password })
    }
}