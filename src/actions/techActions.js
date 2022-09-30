import { setLoading } from "./logActions";
import { ADD_TECH, DELETE_TECH, GET_TECHS, TECHS_ERROR } from "./types";

// Get techs from server

// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
}

// Add a technician to server
export const addTech = tech => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
}

// Delete a tech
export const deleteTech = id => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
}