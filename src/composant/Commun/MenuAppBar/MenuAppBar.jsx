import React, {useEffect, useState} from "react";
import * as PropTypes from 'prop-types';
import List from "@material-ui/core/List/index";
import Drawer from "@material-ui/core/Drawer/index";
import Divider from "@material-ui/core/Divider/index";
import {Hidden, withStyles} from "@material-ui/core";
import MenuItem from "./MenuItem.js";
import {useInterval} from "../../../utils/useInterval";

const MenuAppBar = props => {

    const {classes, theme, role, open, onClose, fetchNumberUserInWaiting} = props;

    const [number, setNumber] = useState(undefined);

    const logout = () => {
        onClose();
        props.logout();
    };


    useEffect(() => {
        if (role === 'Admin') {
            fetchNumberUserInWaiting(setNumber)
        }
    }, [fetchNumberUserInWaiting, role]);

    //duplication du code car sinon react appelle toutes les millisecondes l'api
    useInterval(() => {
        if (role === 'Admin') {
            fetchNumberUserInWaiting(setNumber)
        }
    }, 12000);

    const menu = (
        <div>
            <List>
                <MenuItem label={"Accueil"} url={"home"} iconName={"home"} onClick={onClose}/>
            </List>
            <Divider/>
            {role && role === 'Admin' &&
            <List>
                <MenuItem label={"Gestion des utilisateurs"} url={"validUser"} iconName={"how_to_reg"}
                          onClick={onClose} number={number && number.UserInWaiting}/>
                <MenuItem label={"Gestion des locations"} url={"reservation"} iconName={"how_to_reg"}
                          onClick={onClose} number={number && number.LocationAsked}/>
                <MenuItem label={"Gestion des véhicules"} url={"vehicule"} iconName={"directions_car"}
                          onClick={onClose}/>
                <MenuItem label={"Gestion des pôles"} url={"pole"} iconName={"location_city"} onClick={onClose}/>
                <MenuItem label={"Planning"} url={"planning"} iconName={"event"} onClick={onClose}/>
            </List>
            }
            <Divider/>
            <List>
                <MenuItem label={"Demandes de location"} url={"booking"} iconName={"bookmark"} onClick={onClose}/>
                <MenuItem label={"Mes locations"} url={"booking/me"} iconName={"bookmarks"} onClick={onClose}/>
            </List>
            <Divider/>
            <List>
                <MenuItem label={"Déconnexion"} iconName={"exit_to_app"} onClick={() => logout()}/>
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer}>
            {/** Cas Ordinateur */}
            <Hidden
                xsDown
                implementation={"css"}
            >
                <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
                    <div className={classes.toolbar}/>
                    {menu}
                </Drawer>
            </Hidden>
            {/** Cas Tablette ou telephone */}
            <Hidden smUp implementation={"css"}>
                <Drawer
                    variant={"temporary"}
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    classes={{paper: classes.drawerPaper}}
                    open={open}
                    onClose={onClose}
                >
                    {menu}
                </Drawer>
            </Hidden>
        </nav>
    )
};

MenuAppBar.propTypes = {
    //etat du menu
    open: PropTypes.bool,

    //ferme le menu
    onClose: PropTypes.func,

    //role de l'utilisateur en cours
    role: PropTypes.string,

    //fonction qui permet de déconnecter l'utilisateur
    logout: PropTypes.func,

    fetchNumberUserInWaiting: PropTypes.func
};

const drawerWidth = 240;
export default withStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
}), {withTheme: true})(MenuAppBar);