// socket
export const socketEndpoint = 'http://localhost:9991'
export const socketConnect = 'connect'
export const socketDisconnect = 'disconnect'
export const socketReceiveJobDetails = 'receive job details'
export const socketGetJobDetials = 'get job details'

// fetch
export const fetchEndpoint = 'http://localhost:9991'
export const apiVersion = '/api/v1'
export const jobApi = fetchEndpoint + apiVersion + '/job'
export const submitNewJob = jobApi + '/new/submit'