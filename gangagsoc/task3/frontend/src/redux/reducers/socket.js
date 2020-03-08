import * as CONSTANTS from '../constants/socket'

const initialState = {
    status: CONSTANTS.SOCKET_DISCONNECTED,
    io: null
}

const socket = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.SOCKET_SET:
            return state = Object.assign({}, state, {io: action.data})

        case CONSTANTS.SOCKET_STATE_UPDATE:
            return state = Object.assign({}, state, {status: action.data})

        default:
            return state
    }
}

export default socket