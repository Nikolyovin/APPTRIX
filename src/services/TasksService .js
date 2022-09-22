import api from "../http/api";

export class TasksService  {
    static async getTasks() {
        return api.get('/issues?fields=id,summary,project(name)')
    }
}
