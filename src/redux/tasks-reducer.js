import { TasksService } from "../services/TasksService "

const SET_TASKS = "SET_TASKS"
const SET_WORK_ITEMS = "SET_WORK_ITEMS"

const initialState = {
    tasks: [],
    workItems: []
}

const tasksReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }

        case SET_WORK_ITEMS:
            return {
                ...state,
                workItems: action.workItems
            }

        default:
            return state
    }
}

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks })
export const setWorkItems = (workItems) => ({ type: SET_WORK_ITEMS, workItems })

export const requestTasks = () => async (dispatch) => {
    try {
        const response = await TasksService.getTasks()
        dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const requestFoundTasks = (payload) => async (dispatch) => {
    try {
        const response = await TasksService.getFoundTasks(payload)
        console.log('response:', response)
        dispatch(setTasks(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const requestTimeSheet = (payload) => async (dispatch) => {
    try {
        const response = await TasksService.getTimeSheet(payload)
        console.log('response:', response)
        dispatch(setWorkItems(response.data))
    } catch (e) {
        console.log(e)
    }
}

export default tasksReducer