import React, {useState} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import * as PropTypes from 'prop-types';

import {Redirect, Route, Switch} from 'react-router'
import {AppBar, CssBaseline, Hidden, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons"
//Page
import Login from "./composant/User/Login/Login.js";
import CreateUser from './composant/User/CreateUser/CreateUser.js'
import Acceuil from "./composant/Acceuil/Acceuil.js";
import ValidUser from "./composant/Admin/ValidateUser/ValidateUser.js";
import Message from "./composant/Message/Message.js";
import VehicleList from "./composant/Admin/VehicleList/VehicleList.js";
import PoleList from "./composant/Admin/PoleList/PoleList.js";
import VehicleInfos from "./composant/Admin/Vehicle/VehicleInfos.js";
import PoleInfos from "./composant/Admin/Pole/PoleInfos.js";
import MenuAppBar from "./composant/MenuAppBar/MenuAppBar.js";
import BookNewCar from "./composant/User/BookNewCar/BookNewCar.js";

const App = props => {

    const {classes, token, role} = props;

    const [openMobile, setOpenMobile] = useState(false);

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
        <ConnectedRouter history={props.history}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Hidden smUp implementation={"css"}>
                            <IconButton
                                color={"inherit"}
                                aria-label={"Open drawer"}
                                onClick={() => setOpenMobile(!openMobile)}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>

                        <Typography variant="h6" color="inherit" noWrap>
                            Book Your Car
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/** Affichage du menu si il y a un token */}
                {token && <MenuAppBar open={openMobile} onClose={() => setOpenMobile(false)}/>}

                <main className={classes.content}>

                    <div className={classes.toolbar}/>
                    <Message/>

                    <Switch>
                        {/* Route générique */}
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/newAccount"} component={CreateUser}/>

                        {/* Route user */}
                        <Route exact path={"/"} component={params => requireUserLogin(<Acceuil {...params}/>)}/>
                        <Route path={"/booking"} component={params => requireUserLogin(<BookNewCar {...params}/>)}/>

                        {/* Route admin */}
                        <Route path={"/validUser"}
                               component={params => requireAdminLogin(<ValidUser {...params}/>)}/>
                        <Route path={"/vehicleList"}
                               component={params => requireAdminLogin(<VehicleList {...params}/>)}/>
                        <Route path={"/vehicleInfos/:vehId"}
                               component={params => requireAdminLogin(<VehicleInfos {...params} />)}/>
                        <Route path={"/poleList"}
                            component={params => requireAdminLogin(<PoleList {...params} />)} />
                        <Route path={"/poleInfos/:poleId"}
                            component={params => requireAdminLogin(<PoleInfos {...params} />)} />
                        <Route component={() => <div>404</div>}/>
                    </Switch>
                </main>
            </div>
        </ConnectedRouter>
    )
};

App.propTypes = {
    classes: PropTypes.object,
    history: PropTypes.object,
    token: PropTypes.string,
    role: PropTypes.string
};

export default withStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
}))(App)