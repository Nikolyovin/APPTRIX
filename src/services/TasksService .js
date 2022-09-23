import api from "../http/api";

export class TasksService  {
    static async getTasks() {
        return api.get('/issues?fields=id,summary,project(name)')
    }
    static async getFoundTasks(value) {
        console.log('value:', typeof(value));
        return api.get(`/issues?fields=id,summary,project(name)&query=for:${value}`)
        // return api.get(`/issues?fields=id,summary,project(name)&query=project:${value}`)
    }
}
