import React from 'react';
import {
    Container,
    Box
} from '@material-ui/core';

import './templateBox.css';

const TemplateBox = (props) => (
    <Container 
    maxWidth={false}
        className='template-box' 
        {...props}>
            {props.children}
    </Container>
);

export default TemplateBox;