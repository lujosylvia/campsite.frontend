import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Toolbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </AnimatedSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
