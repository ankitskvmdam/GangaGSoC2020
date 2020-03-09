import * as CONSTANTS from '../constants/jobs'

const initialState = {
    get_details_of: null,
    action: null
}

const jobs = ( state = initialState, action ) => {
    switch(action.type){
        case CONSTANTS.GET_JOB_DETAILS:
            return state = Object.assign({}, {get_details_of: action.data, action: CONSTANTS.GET_JOB_DETAILS})

        case CONSTANTS.RESET_JOB_DETAILS:
            return state = Object.assign({},{get_details_of: null, action:CONSTANTS.RESET_JOB_DETAILS})
        
        default:
            return state
    }
}

export default jobs