import {GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK} from "../actions/types";
import {act} from "react-dom/test-utils";

const initState = {
    project_tasks: [],
    project_task: {}
}

export default function (state = initState  , action) {
    switch (action.type){

        case GET_BACKLOG:
            return {
                ...state,
                project_tasks: action.payload
            }

        case GET_PROJECT_TASK:
            return {
                ...state,
                project_task: action.payload
            }

        case DELETE_PROJECT_TASK:
            return {
                ...state
                //TODO
            }


        default:
            return state;
    }
}
