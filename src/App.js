import React from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'


import {Route, Switch} from 'react-router'

const App = ({history}) => {


    const requireAuthentificate = (component) => {
        return component;
    }


    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path={"/"} component={requireAuthentificate(<div>ok</div>)}/>
                    <Route path={"/login"} component={requireAuthentificate(<div>login</div>)}/>
                    <Route component={() => <div>404</div>}/>
                </Switch>
            </div>
        </ConnectedRouter>
    )
};

App.propTypes = {
    history: PropTypes.object,
};

export default App