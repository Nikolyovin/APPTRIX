import api from "../http/api";

export class TasksService {
    static async getTasks() {
        return api.get('/issues?fields=id,summary,project(name)')
    }
    static async getFoundTasks(value) {
        return api.get(`/issues?fields=id,summary,project(name)&query=for:${value}`)
        // return api.get(`/issues?fields=id,summary,project(name)&query=project:${value}`)
    }
    static async getTimeSheet(value) {
        return api.get(`/workItems?fields=created,duration(presentation,minutes),author(name),creator(name),id`)
        // return api.get(`/issues?fields=id,summary,project(name)&query=project:${value}`)
        // https://example.youtrack.cloud/api/workItems/115-2?fields=created,duration(presentation,minutes),author(name),creator(name),date,id
    }
}
