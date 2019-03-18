import React from 'react'
import * as PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'


import {Redirect, Route, Switch} from 'react-router'
import CustomAppBar from "./composant/CustomAppBar/CustomAppBar.jsx";
import {withStyles} from "@material-ui/core";
//Page
import Login from "./composant/User/Login/Login.js";
import CreateUser from './composant/User/CreateUser/CreateUser.js'
import Acceuil from "./composant/Acceuil/Acceuil.js";

const App = props => {

    const {classes} = props;

    /**
     * Détect si l'utilisateur est connecté
     * Si personne est connecté, redirige vers la page de login,
     * sinon affiche le composent
     *
     * @param component le composent a rendre si l'utilisateur est bien connecté
     *
     * @returns {*} component
     */
    const requireLogin = (component) => {
        if (props.token) {
            return component;
        }

        console.log("No user login, redirect ...");
        return <Redirect to={"/login"}/>
    };

    return (
        <div>


            {/** Route de l'application **/}
            <ConnectedRouter history={props.history}>
                <div>
                    <CustomAppBar/>
                    {/* Permet d'espacer le menu de l'appbar */}
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route path={"/login"} component={() => <Login/>}/>
                        <Route path={"/newAccount"} component={() => <CreateUser/>}/>
                        <Route exact path={"/"} component={() => requireLogin(<Acceuil/>)}/>
                        <Route component={() => <div>404</div>}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </div>
    )
};

App.propTypes = {
    history: PropTypes.object,
    token: PropTypes.string
};

export default withStyles((theme) => ({
    toolbar: theme.mixins.toolbar
}))(App)