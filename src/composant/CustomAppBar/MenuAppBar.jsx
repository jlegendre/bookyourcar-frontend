import React from "react";
import * as PropTypes from 'prop-types'

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon"
import {withStyles} from "@material-ui/core";

const MenuAppBar = props => {

    const {classes, token, open, setOpen} = props;

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

                <List>
                    <ListItem button>
                        <ListItemText primary={"BlaBla"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={"BlaBla"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={"BlaBla"}/>
                    </ListItem>
                </List>
                <Divider/>
                {token && (
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
                )}

            </div>
        </Drawer>
    )
};

MenuAppBar.propTypes = {
    open: PropTypes.bool,
    token: PropTypes.string,
    setOpen: PropTypes.func,
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

    toolbar: theme.mixins.toolbar
}))(MenuAppBar);