import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

import * as serviceWorker from './serviceWorker';

import configureStore, {history} from './configureStore';

import App from "./App.js";
import {MuiThemeProvider} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const store = configureStore();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#49AAB3',
            contrastText: 'white'
        },
        secondary: {
            main: '#383E45'
        }
    },
    typography: {
        useNextVariants: true,
    }
});

//Configuration react et redux
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistStore(store)} loading={null}>
            <MuiThemeProvider theme={theme}>
                <App history={history}/>
            </MuiThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('rootParent')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;