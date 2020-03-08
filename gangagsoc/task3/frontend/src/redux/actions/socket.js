import * as CONSTANTS from '../constants/socket'

const setSocket = (socket) => ({
    type: CONSTANTS.SOCKET_SET,
    data: socket
})

const socketStatus = (state) => ({
    type: CONSTANTS.SOCKET_STATE_UPDATE,
    data: state
})


export {
    setSocket,
    socketStatus,
}