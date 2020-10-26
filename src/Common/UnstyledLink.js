import React from 'react';
import { NavLink } from 'react-router-dom';

const UnstyledLink = (props) => (
    <NavLink style={{ textDecoration: 'inherit', color: 'inherit' }} {...props}>
        {props.children}
    </NavLink>
)

export default UnstyledLink