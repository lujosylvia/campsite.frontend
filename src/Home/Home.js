
import React from "react";
import {
    Button,
    Grid,
    Box
} from '@material-ui/core';
import UnstyledLink from '../Common/UnstyledLink';

import './home.css';


const Home = () => (
    <Box px={5}>
        <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='flex-start'
            spacing={3}
        >
            <Grid item xs={12}>
                <ConnectVerbiage />
            </Grid>
            <Grid item xs={12}>
                <div className='hook-verbiage'>Get your site today.</div>
            </Grid>
            <Grid item xs={12}>
                <UnstyledLink to='/signup'>
                    <Button className='start-now-button'>Start Now</Button>
                </UnstyledLink>
            </Grid>
        </Grid>
    </Box>
);

const ConnectVerbiage = () => (
    <div className='connect-verbiage-container'>
        <div className='connect-verbiage-bold'>Connect with the right experts.</div>
        <div className='connect-verbiage-shadow'>Connect with the right experts.</div>
    </div>
)

export default Home;