import React from "react";
import * as PropTypes from 'prop-types'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon"
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const MenuAppBar = props => {

    const {classes, token, open, setOpen, role} = props;

    const logout = () => {
        props.logout();
        setOpen(false);
    };


    return (
        <Drawer
            open={open}
            variant={"persistent"}
            className={classes.drawer}
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                {/* /!\ IMPORTANT /!\ Permet d'espacer le menu de l'appbar */}
                <div className={classes.toolbar}/>

                {!token &&
                <div>
                    {/** Partie login / create new user **/}
                    <List>
                        <Link to={"/login"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><Icon>lock</Icon></ListItemIcon>
                                <ListItemText primary={"Login"}/>
                            </ListItem>
                        </Link>
                        <Link to={"/newAccount"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><Icon>how_to_reg</Icon></ListItemIcon>
                                <ListItemText primary={"Create Account"}/>
                            </ListItem>
                        </Link>
                    </List>
                </div>
                }


                {/** Partie Utilisateur **/}
                {token &&
                <div>
                    {role && role === 'Admin' &&
                    <div>
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
                        </List>
                    </div>
                    }
                    <Divider/>
                    <List>
                        <ListItem button>
                            <ListItemIcon><Icon>account_circle</Icon></ListItemIcon>
                            <ListItemText primary={"Account"}/>
                        </ListItem>
                        <ListItem button onClick={() => logout()}>
                            <ListItemIcon><Icon>exit_to_app</Icon></ListItemIcon>
                            <ListItemText primary={"Logout"}/>
                        </ListItem>
                    </List>
                </div>
                }

            </div>
        </Drawer>
    )
};

MenuAppBar.propTypes = {

    //etat du menu
    open: PropTypes.bool,

    //token de l'utilisateur en cours
    token: PropTypes.string,

    //role de l'utilisateur en cours
    role: PropTypes.string,

    //fonction qui permet de changer l'état du menu
    setOpen: PropTypes.func,

    //fonction qui permet de déconnecter l'utilisateur
    logout: PropTypes.func
};


const drawerWidth = 240;
export default withStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    link: {
        textDecoration: 'none'
    },
    toolbar: theme.mixins.toolbar
}))(MenuAppBar);