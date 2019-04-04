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
import ValidUser from "./composant/Admin/ValidateUser/ValidateUser.js";
import Message from "./composant/Message/Message.js";
import VehicleList from "./composant/Admin/VehicleList/VehicleList";

const App = props => {

    const {classes, token, role} = props;

    /**
     * Détect si l'utilisateur est connecté
     * Si personne est connecté, redirige vers la page de login,
     * sinon affiche le component
     *
     * @param component le component a rendre si l'utilisateur est bien connecté
     *
     * @returns {*} component
     */
    const requireUserLogin = component => {
        if (token) {
            return component;
        }

        console.log("No user login, redirect ...");
        return <Redirect to={"/login"}/>
    };


    /**
     * Détect si un administrateur est connecté
     * Si une personne est connecté et que ce n'est pas un administrateur,
     * redirige vers la page de login,
     * sinon affiche le component
     *
     * @param component le component a rendre si l'utilisateur est un administrateur
     *
     * @return {*} component
     */
    const requireAdminLogin = component => {
        if (token) {

            if (role && role === 'Admin') {
                return component;
            } else {
                console.log("User don't have necessary role, redirect ...");
                return <Redirect to={"/"}/>
            }
        }

        console.log("User not connected or not admin, redirect ...");
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

                    <Message/>

                    <Switch>
                        {/* Route générique */}
                        <Route path={"/login"} component={() => <Login/>}/>
                        <Route path={"/newAccount"} component={() => <CreateUser/>}/>

                        {/* Route user */}
                        <Route exact path={"/"} component={() => requireUserLogin(<Acceuil/>)}/>

                        {/* Route admin */}
                        <Route path={"/validUser"} component={() => requireAdminLogin(<ValidUser/>)}/>
                        <Route path={"/vehicleList"} component={() => requireAdminLogin(<VehicleList/>)}/>

                        <Route component={() => <div>404</div>}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </div>
    )
};

App.propTypes = {
    classes: PropTypes.object,
    history: PropTypes.object,
    token: PropTypes.string,
    role: PropTypes.string
};

export default withStyles(theme => ({
    toolbar: theme.mixins.toolbar
}))(App)