import React from 'react';
import { NavLink } from 'react-router-dom'

import RightArrowIcon from  '../../../assets/images/svg/icons/next.svg'

const RenderLinks = ({ links }) => {
    return(
        links.map( (item, key) => {
            return(
                <NavLink to={item.link} className="item" activeClassName="active" key={key}>
                    <item.icon className="icon" />
                    <div className="title">
                        {item.title}
                    </div>
                    <RightArrowIcon className="icon"/>
                </NavLink>
            )
        })
    )
}

export default RenderLinks