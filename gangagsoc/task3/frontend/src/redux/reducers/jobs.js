import * as CONSTANTS from '../constants/jobs'

const initialState = {
    get_details_of: null
}

const jobs = ( state = initialState, action ) => {
    switch(action.type){
        case CONSTANTS.GET_JOB_DETAILS:
            return state = Object.assign({}, {get_details_of: action.data})

        default:
            return state
    }
}

export default jobs