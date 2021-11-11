import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {red} from '@material-ui/core/colors'
import Footer from './Footer';
import Header from './Header';

const theme = createTheme({
    palette: {
      type: "dark",
      primary:red,
      secondary:{
          main:'#b9f6ca',
      }
    }
  });

ReactDOM.render(
<ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
      <App />
    <Footer className="btm"/>
</ThemeProvider>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
