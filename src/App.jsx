import React, {Component} from 'react'
import * as PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'


import {Redirect, Route, Switch} from 'react-router'
import Login from "./composant/Login/Login.js";
import Acceuil from "./composant/Acceuil/Acceuil.js";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

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
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Book Your Car {this.props.token ? "Logged" : ""}
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/** Route de l'application **/}
                <ConnectedRouter history={this.props.history}>
                    <div>
                        <Switch>
                            <Route exact path={"/"} component={() => this.requireLogin(<Acceuil/>)}/>
                            <Route path={"/login"} component={() => <Login/>}/>
                            <Route component={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </div>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


App.propTypes = {
    history: PropTypes.object,
    token: PropTypes.string
};

export default withStyles(styles)(App)