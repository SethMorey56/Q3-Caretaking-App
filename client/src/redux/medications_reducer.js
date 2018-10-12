import { FETCH_MEDICATIONS_SUCCESS, FETCH_MEDICATIONS_FAILED, POST_MEDICATIONS_SUCCESS, POST_MEDICATIONS_FAILED } from './actions';
import { DELETE_MEDICATIONS_SUCCESS, DELETE_MEDICATIONS_FAILED} from './actions';

let initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEDICATIONS_SUCCESS:
            return action.payload;
        case FETCH_MEDICATIONS_FAILED:
            return state
        case POST_MEDICATIONS_SUCCESS:
            return [...state, action.payload]
        case POST_MEDICATIONS_FAILED:
            return state
        case DELETE_MEDICATIONS_SUCCESS:
            return state.filter(med => med.id !== action.payload);
        case DELETE_MEDICATIONS_FAILED:
            return state
        default:
            return state
    }
}