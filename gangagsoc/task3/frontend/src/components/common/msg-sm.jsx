import React from 'react'

const MsgSm = ({msg, type, classList}) => {
    return(
        <div className={"msg-sm " + type + ' ' + classList}>
            {msg}
        </div>
    )
}

MsgSm.defaultProps = { 
    msg: '',
    type: '',
    classList: ''
}

export default MsgSm