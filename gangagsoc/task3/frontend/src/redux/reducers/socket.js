import { SOCKET_DISCONNECTED, SOCKET_CONNECTED } from '../constants/socket'

const initialState = {
    socket: null
}

const socket = (state = initialState, action) => {
    switch (action.type) {
        case SOCKET_CONNECTED:
            return state = Object.assign({}, {socket: action.data})

        case SOCKET_DISCONNECTED:
            return state = Object.assign({}, {socket: action.data})

        default:
            return state
    }
}

export default socket