import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Grid,
    Container,
    FormControl,
    InputLabel,
    Input,
    useMediaQuery
} from '@material-ui/core';
import UnstyledLink from '../Common/UnstyledLink';
import TemplateBox from '../Common/TemplateBox/TemplateBox';

const SignUp = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <TemplateBox>
            <Grid
                container
                direction={isLargeScreen ? 'row' : 'column'}
                justify='center'
                alignItems='center'
                spacing={6}
            >
                <Grid item xs>
                    <SignUpForm />
                </Grid>
                <div className={`${ isLargeScreen ? 'vertical' : 'horizontal'}-divider`} />
                <Grid item xs>
                    <Container maxWidth='md'>
                    <div className='verbiage-bold'>
                        Already have an acount? <UnstyledLink to='/signin'><div className='verbiage-bold-underlined'>Sign in here.</div></UnstyledLink>
                    </div>
                    </Container>
                </Grid>
            </Grid>
        </TemplateBox>
    )
}

const SignUpForm = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return(
            <form>
                <Container maxWidth='sm' disableGutters>
                    <FormControl margin='dense' required fullWidth>
                        <InputLabel htmlFor='uesrname'>Username</InputLabel>
                        <Input id='username' name='username'  fullWidth required />
                    </FormControl>
                    <FormControl margin='dense' required fullWidth>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input id='password' name='password' fullWidth required />
                    </FormControl>
                    <FormControl margin='dense' required fullWidth>
                        <InputLabel htmlFor='reenterPassword'>Confirm Password</InputLabel>
                        <Input id='reenterPassword' name='reenterPassword' fullWidth required />
                    </FormControl>
                    <FormControl margin='dense' required>
                        <Button className='primary-button' type='submit' fullWidth={!isLargeScreen}>Sign Up</Button>
                    </FormControl>
                </Container>
            </form>
    )
}

export default SignUp;