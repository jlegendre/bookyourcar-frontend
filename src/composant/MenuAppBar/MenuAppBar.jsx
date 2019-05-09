import React from "react";
import * as PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {Hidden, withStyles} from "@material-ui/core";
import MenuItem from "./MenuItem.js";

const MenuAppBar = props => {

    const {classes, theme, role, open, onClose} = props;

    const logout = () => {
        props.logout();
    };

    const menu = (
        <div>
            <List>
                <MenuItem label={"Compte"} iconName={"account_circle"}/>
            </List>
            <Divider/>
            {role && role === 'Admin' &&
            <List>
                <MenuItem label={"Liste de véhicules"} url={"vehicleList"} iconName={"directions_car"} onClick={onClose}/>
                <MenuItem label={"Liste des pôles"} url={"poleList"} iconName={"location_city"} onClick={onClose}/>
            </List>
            }
            <Divider/>
            <List>
                <MenuItem label={"Demande de réservation"} url={"booking"} iconName={"bookmarks"} onClick={onClose}/>
                <MenuItem label={"Deconnexion"} iconName={"exit_to_app"} onClick={() => logout()}/>
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
    logout: PropTypes.func
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