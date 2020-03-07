import React from 'react'

const MsgSm = ({msg, type}) => {
    return(
        <div className={"msg-sm " + type}>
            {msg}
        </div>
    )
}

MsgSm.defaultProps = { 
    msg: '',
    type: ''
}

export default MsgSm