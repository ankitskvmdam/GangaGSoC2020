import * as CONSTANTS from '../constants/jobs'

const getJobDetails = (id) => ({
    type: CONSTANTS.GET_JOB_DETAILS,
    data: id
})

const resetJobDetails = () => ({
    type: CONSTANTS.RESET_JOB_DETAILS
})

export {
    getJobDetails,
    resetJobDetails
}