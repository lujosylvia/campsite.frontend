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

const SignIn = () => {
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
                    <SignInForm />
                </Grid>
                <div className={`${ isLargeScreen ? 'vertical' : 'horizontal'}-divider`} />
                <Grid item xs>
                    <Container maxWidth='md'>
                    <div className='verbiage-bold'>
                        New here? <UnstyledLink to='/signup'><div className='verbiage-bold-underlined'>Let's get started.</div></UnstyledLink>
                    </div>
                    </Container>
                </Grid>
            </Grid>
        </TemplateBox>
    )
}

const SignInForm = () => {
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
                    <FormControl margin='dense' required>
                        <Button className='primary-button' type='submit' fullWidth={!isLargeScreen}>Sign In</Button>
                    </FormControl>
                </Container>
            </form>
    )
}

export default SignIn;