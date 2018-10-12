import axios from 'axios';

export const FETCH_MEDICATIONS_SUCCESS = "FETCH_MEDICATIONS_SUCCESS"
export const FETCH_MEDICATIONS_FAILED = "FETCH_MEDICATIONS_FAILED"

export const POST_MEDICATIONS_SUCCESS = "POST_MEDICATIONS_SUCCESS"
export const POST_MEDICATIONS_FAILED = "POST_MEDICATIONS_FAILED"

export const fetchMeds = () => {
    return dispatch => {
        axios.get('http://localhost:8000/medications').then(response => dispatch({
            type: FETCH_MEDICATIONS_SUCCESS,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: FETCH_MEDICATIONS_FAILED,
            payload: err
        }))
    }
}

export const postMeds = (med) => {
    return dispatch => {
        axios.post('http://localhost:8000/medications', med).then(response => dispatch({
            type: POST_MEDICATIONS_SUCCESS,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: POST_MEDICATIONS_FAILED,
            payload: err
        }))
    }
}

// meds (above) is this.state in the PostMeds function in MedListFrom