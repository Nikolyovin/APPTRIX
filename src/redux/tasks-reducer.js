import { TasksService } from "../services/TasksService "

const SET_TASKS = "SET_TASKS"

const initialState = { 
    tasks: [],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
               ...state,
               tasks: action.tasks 
            }

        default:
            return state 
    }
}

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks })

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

export default tasksReducer