import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'


import {Redirect, Route, Switch} from 'react-router'
import Login from "./composant/Login/Login.js";
import Acceuil from "./composant/Acceuil/Acceuil.js";


class App extends Component {

    constructor(props) {
        super(props);

        this.requireLogin = this.requireLogin.bind(this);
    }


    /**
     * Détect si l'utilisateur est connecté
     * Si personne est connecté, redirige vers la page de login,
     * sinon affiche le composent
     *
     * @param component le composent a rendre si l'utilisateur est bien connecté
     *
     * @returns {*} component
     */
    requireLogin(component) {
        if (this.props.token) {
            return component;
        }

        console.log("No user login, redirect ...");
        return <Redirect to={"/login"}/>

    };

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <Switch>
                        <Route exact path={"/"} component={() => this.requireLogin(<Acceuil/>)}/>
                        <Route path={"/login"} component={() => <Login/>}/>
                        <Route component={() => <div>404</div>}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}


App.propTypes = {
    history: PropTypes.object,
    token: PropTypes.object
};

export default App