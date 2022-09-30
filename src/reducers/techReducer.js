import { ADD_TECH, GET_TECHS, SET_LOADING, DELETE_TECH, TECHS_ERROR } from "../actions/types";

const initialState = {
    techs: null,
    loading: false,
    error: null
};

const techReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TECHS:
            return {
                ...state,
                techs: payload,
                loading: false
            }

        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, payload],
                loading: false
            }

        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== payload),
                loading: false
            }

        case TECHS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
}

export default techReducer;