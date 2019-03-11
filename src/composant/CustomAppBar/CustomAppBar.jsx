import React, {useState} from "react";

import {AppBar, Icon, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuAppBar from "./MenuAppBar.js";

/**
 * AppBar de l'application
 *
 * @param props les paramètres du composant
 *
 * @returns {*}
 * @constructor
 */
const CustomAppBar = (props) => {

    const {classes} = props;

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton color={"inherit"} onClick={() => handleMenuOpen()}>
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Book Your Car
                    </Typography>
                </Toolbar>
            </AppBar>
            <MenuAppBar
                open={menuOpen}
                setOpen={(open) => setMenuOpen(open)}
            />
        </div>
    );
};

const styles = theme => ({
    root: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
});

export default withStyles(styles)(CustomAppBar);