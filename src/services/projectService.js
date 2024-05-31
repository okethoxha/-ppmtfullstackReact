import axios from "axios";
import {showError} from "../utilfunctions";

export const createProject = async (project)  => {
    try {
        return await axios.post("/api/project", project);
    } catch (err) {
        showError(err)
    }
};