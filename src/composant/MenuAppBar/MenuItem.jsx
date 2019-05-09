import React from 'react';
import * as ProTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";

/**
 * Composant de MenuItem pour le MenuAppBar
 * @param props
 * @return {*}
 * @constructor
 */
const MenuItem = props => {

    const {url, iconName, label, pathname, classes, onClick} = props;

    const listItem =
        <ListItem button selected={pathname === `/${url}`} onClick={onClick}>
            <ListItemIcon><Icon>{iconName}</Icon></ListItemIcon>
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
    onClick: ProTypes.func
};


export default withStyles({
    link: {
        textDecoration: 'none'
    }
})(MenuItem);