import React from 'react'
import * as PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'


import {Redirect, Route, Switch} from 'react-router'
import Login from "./composant/Login/Login.js";
import Acceuil from "./composant/Acceuil/Acceuil.js";
import CustomAppBar from "./composant/CustomAppBar/CustomAppBar.jsx";
import {withStyles} from "@material-ui/core";

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
            <CustomAppBar/>
            {/* Permet d'espacer le menu de l'appbar */}
            <div className={classes.toolbar}/>

            {/** Route de l'application **/}
            <ConnectedRouter history={props.history}>
                <div>
                    <Switch>
                        <Route exact path={"/"} component={() => requireLogin(<Acceuil/>)}/>
                        <Route path={"/login"} component={() => <Login/>}/>
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

const styles = theme => ({
    toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(App)