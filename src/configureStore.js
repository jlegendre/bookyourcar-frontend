import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './redux/reducers'
import {composeWithDevTools} from "redux-devtools-extension";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history)))
    );

}