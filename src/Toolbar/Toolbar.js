import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar as AppToolbar,
    InputBase,
    Button,
    useMediaQuery
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import UnstyledLink from '../Common/UnstyledLink';
import './toolbar.css';

const Toolbar = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <AppBar position="sticky" className='toolbar'>
            <AppToolbar className='flex-box'>
            <div className='home-container'>
                <UnstyledLink to='/'>
                    <Button style={{ color: 'white'}} >{ isLargeScreen ? 'Campsite' : 'C' }</Button>
                </UnstyledLink>
            </div>
                {
                    isLargeScreen
                    ? (<LargeSearch />)
                    : (<MobileSearch />)
                }
                
                <div className='nav-container-right'>
                    <UnstyledLink to='/signin'>
                        <Button color='inherit' className='nav-button'>Sign In</Button>
                    </UnstyledLink>
                    <UnstyledLink to='/signup'>
                        <Button color='inherit' className='nav-button'>{"I'm new"}</Button>
                    </UnstyledLink>
                </div>
            </AppToolbar>
        </AppBar>
    );
};

const LargeSearch = () => (
    <div className='nav-container-center'>
        <div className='toolbar-search'>
            <div className='search-button'>
                <SearchIcon />
            </div>
            <InputBase
                className='search-input'
                placeholder='Search...'
            />
        </div>
    </div>
)

const MobileSearch = () => {
    const [mobileSearch, toggleMobileSearch] = useState(false);

    return (
        <div className='nav-container-center'>
            <div 
                className={`search-button-mobile ${mobileSearch ? 'search-button-mobile-toggled' : ''}`} 
                onClick={() => toggleMobileSearch(!mobileSearch)}
            >
                <SearchIcon />
            </div>
            {
                    mobileSearch
                    ? (
                        <div className='toolbar-search-mobile'>
                        <InputBase
                            className='search-input-mobile'
                            placeholder='Search...'
                        />
                    </div>
                    )
                    : null
                }
        </div>
    );
};

export default Toolbar;