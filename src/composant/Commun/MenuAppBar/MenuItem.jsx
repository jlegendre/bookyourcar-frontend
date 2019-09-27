import React from 'react';
import * as ProTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem/index";
import ListItemIcon from "@material-ui/core/ListItemIcon/index";
import Icon from "@material-ui/core/Icon/index";
import ListItemText from "@material-ui/core/ListItemText/index";
import {Link} from "react-router-dom";
import {Badge, withStyles} from "@material-ui/core";

/**
 * Composant de MenuItem pour le MenuAppBar
 * @param props
 * @return {*}
 * @constructor
 */
const MenuItem = props => {

    const {url, iconName, label, pathname, classes, onClick, number} = props;

    const icon = <Icon>{iconName}</Icon>;

    const listItem =
        <ListItem button selected={pathname === `/${url}`} onClick={onClick}>
            <ListItemIcon>
                {
                    number ? <Badge badgeContent={number} color={"primary"} overlap={"circle"}>{icon}</Badge>: icon
                }
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItem>;

    //Si une url est présente, on affiche encapsule notre item par un Link
    if (url) {
        return (
            <Link to={`/${url}`} className={classes.link}>
                {listItem}
            </Link>
        )
    }

    return listItem

};

MenuItem.propTypes = {
    url: ProTypes.string,
    iconName: ProTypes.string,
    label: ProTypes.string.isRequired,
    pathname: ProTypes.string,
    onClick: ProTypes.func,
    number: ProTypes.number
};


export default withStyles({
    link: {
        textDecoration: 'none'
    }
})(MenuItem);