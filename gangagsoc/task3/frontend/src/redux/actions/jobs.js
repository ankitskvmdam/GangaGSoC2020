import * as CONSTANTS from '../constants/jobs'

const getJobDetails = (id) => ({
    type: CONSTANTS.GET_JOB_DETAILS,
    data: id
})


export {
    getJobDetails,
}