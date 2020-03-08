import { SOCKET_DISCONNECTED, SOCKET_CONNECTED } from '../constants/socket'

const setSocket = (socket) => {
    return {
        type: SOCKET_CONNECTED,
        data: socket
    }
}

const removeSocket = () => {
    return {
        type: SOCKET_DISCONNECTED,
        data: null
    }
}

export {
    setSocket,
    removeSocket
}