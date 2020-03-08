import { combineReducers } from 'redux'
import socket from './socket'
import jobs from './jobs'

const reducers = combineReducers({
    socket,
    jobs
})


export default reducers