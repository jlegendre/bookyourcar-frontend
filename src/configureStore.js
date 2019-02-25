import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import createRootReducer from './redux/reducers'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );

}