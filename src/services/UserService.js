///тут нужно смотреть документацию, возможно другой апи
import api from "../http";

export default class UserService {
    static fetchUsers() {
        return api.get('/users')
    }
}