import { SOCKET_DISCONNECTED, SOCKET_CONNECTED } from '../constants/socket'

const setSocket = (socket) => {
    return {
        type: SOCKET_CONNECTED,
        data: socket
    }
}

const removeSocket = (socket) => {
    return {
        type: SOCKET_DISCONNECTED,
        data: socket
    }
}

export {
    setSocket,
    removeSocket
}