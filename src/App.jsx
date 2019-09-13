import React, {useEffect, useState} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import * as PropTypes from 'prop-types';

import {Redirect, Route, Switch} from 'react-router'
import {AppBar, CssBaseline, Hidden, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons"
//Page
import Login from "./composant/User/Login/Login.js";
import CreateUser from './composant/User/CreateUser/CreateUser.js'
import Accueil from "./composant/Commun/Accueil/Accueil.js";
import ValidUser from "./composant/Admin/ValidateUser/ValidateUser.js";
import Message from "./composant/Commun/Message/Message.js";
import VehicleList from "./composant/Admin/VehicleList/VehicleList.js";
import PoleList from "./composant/Admin/PoleList/PoleList.js";
import VehicleInfos from "./composant/Admin/Vehicle/VehicleInfos.js";
import PoleInfos from "./composant/Admin/Pole/PoleInfos.js";
import MenuAppBar from "./composant/Commun/MenuAppBar/MenuAppBar.js";
import NewLocation from "./composant/User/NewLocation/NewLocation.js";
import MyLocation from './composant/User/MyLocation/MyLocation.js';
import {getBreakingLimit} from "./utils/cssUtils";
import VehicleCreate from "./composant/Admin/CreateVehicle/VehicleCreate";
import ValidateReservation from "./composant/Admin/ValidateReservation/ValidateReservation.js";
import NewPole from "./composant/Admin/Pole/NewPole.js";
import Planning from "./composant/Admin/Planning/Planning";

const App = props => {

    const {classes, token, role, user, fetchUser} = props;

    const [openMobile, setOpenMobile] = useState(false);

    useEffect(() => {
        if (token) {
            fetchUser();
        }
    }, [fetchUser, token]);

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
                <AppBar position="fixed" className={classes.appBar} id={"customAppBar"}>
                    <Toolbar>
                        <Hidden smUp implementation={"css"}>
                            {token &&
                            <IconButton
                                style={{flexGrow: 1}}
                                color={"inherit"}
                                aria-label={"Open drawer"}
                                onClick={() => setOpenMobile(!openMobile)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            }
                        </Hidden>

                        <Typography variant="h6" color="inherit" noWrap style={{flexGrow: 1}}>
                            BookYourCar
                        </Typography>

                        {user && (
                            <Hidden implementation={"css"} xsDown>
                                <Typography color={"inherit"} variant={"h6"}>
                                    {`${user.firstName} ${user.lastName}`}
                                </Typography>
                            </Hidden>
                        )}

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
                        <Route exact path={"/"} component={params => requireUserLogin(<Accueil {...params}/>)}/>
                        <Route exact path={"/home"} component={params => requireUserLogin(<Accueil {...params}/>)}/>
                        <Route exact path={"/booking"}
                               component={params => requireUserLogin(<NewLocation {...params}/>)}/>
                        <Route exact path={"/booking/me"}
                               component={params => requireUserLogin(<MyLocation {...params}/>)}/>

                        {/* Route admin */}
                        <Route path={"/validUser"}
                               component={params => requireAdminLogin(<ValidUser {...params}/>)}/>
                        <Route exact path={"/vehicleList"}
                               component={params => requireAdminLogin(<VehicleList {...params}/>)}/>
                        <Route exact path={"/vehicle/:vehId"}
                               component={params => requireAdminLogin(<VehicleInfos {...params} />)}/>
                        <Route path={"/vehicleCreate"}
                               component={params => requireAdminLogin(<VehicleCreate {...params} />)}/>
                        <Route path={"/poleList"}
                               component={params => requireAdminLogin(<PoleList {...params} />)}/>
                        <Route path={"/poleCreate"}
                               component={params => requireAdminLogin(<NewPole {...params} />)}/>
                        <Route path={"/planning"}
                               component={params => requireAdminLogin(<Planning {...params}/>)}/>
                        <Route path={"/reservation"} exact
                               component={params => requireAdminLogin(<ValidateReservation {...params} />)}/>
                        <Route path={"/reservation/:locationId"}
                               component={params => requireAdminLogin(<ValidateReservation {...params} />)}/>

                        <Route exact path={"/poleInfos/:poleId"}
                               component={params => requireAdminLogin(<PoleInfos {...params} />)}/>

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
    role: PropTypes.string,
    user: PropTypes.object,
    fetchUser: PropTypes.func
};

export default withStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            height: '100%'
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.down(getBreakingLimit(theme))]: {
            padding: 0,
            height: "calc(100% - 56px)" //56 c'est le nombre de pixem de l'appbar (+ ou - )
        }
    },
    toolbar: theme.mixins.toolbar,
}))(App)