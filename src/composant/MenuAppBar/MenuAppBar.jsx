import React from "react";
import * as PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon"
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import {Hidden, withStyles} from "@material-ui/core";

const MenuAppBar = props => {

    const {classes, theme, role, open, onClose} = props;

    const logout = () => {
        props.logout();
    };

    const menu = (
        <div>
            {role && role === 'Admin' &&
            <List>
                <Link to={"/validUser"} className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><Icon>how_to_reg</Icon></ListItemIcon>
                        <ListItemText primary={"Validation d'utilisateurs"}/>
                    </ListItem>
                </Link>
                <Link to={"/vehicleList"} className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><Icon>directions_car</Icon></ListItemIcon>
                        <ListItemText primary={"Liste de véhicules"}/>
                    </ListItem>
                </Link>
                <Link to={"/poleList"} className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><Icon>location_city</Icon></ListItemIcon>
                        <ListItemText primary={"Liste des pôles"}/>
                    </ListItem>
                </Link>
            </List>
            }
            <Divider/>
            <List>
                <ListItem button>
                    <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                    <ListItemText primary={"Compte"}/>
                </ListItem>
                <Link to={"/booking"} className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><Icon>bookmarks</Icon></ListItemIcon>
                        <ListItemText primary={"Réservations"}/>
                    </ListItem>
                </Link>
                <ListItem button onClick={() => logout()}>
                    <ListItemIcon><Icon>exit_to_app</Icon></ListItemIcon>
                    <ListItemText primary={"Deconnexion"}/>
                </ListItem>
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
    toolbar: theme.mixins.toolbar,
    link: {
        textDecoration: 'none'
    }
}), {withTheme: true})(MenuAppBar);