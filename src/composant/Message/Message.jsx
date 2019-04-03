import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {IconButton, SnackbarContent, withStyles} from "@material-ui/core";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';


const Message = props => {

    const {classes, message} = props;


    /**
     * Detecte et construits les informations du message
     */
    const typeMessage = () => {
        if (message) {
            if (message['Error']) {
                return {type: 'error', message: message['Error'], icon: ErrorIcon}
            } else if (message['Warning']) {
                return {type: 'warning', message: message['Warning'], icon: WarningIcon}
            } else if (message['Success']) {
                return {type: 'success', message: message['Success'], icon: CheckCircleIcon}
            } else if (message['Info']) {
                return {type: 'info', message: message['Info'], icon: InfoIcon}
            }
        }

        return null;
    };

    /**
     * Si il n'y a pas de message, on ne retourne rien.
     */
    if (!typeMessage()) {
        return <div/>
    }

    const Icon = typeMessage()['icon'];
    const text = typeMessage()['message'];
    const type = typeMessage()['type'];

    return (
        <div className={classes.main}>
            <SnackbarContent
                className={classes[type]}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                        {text}
                </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit">
                        <CloseIcon className={classes.icon}/>
                    </IconButton>
                ]}
            />
        </div>
    )
};

Message.propTypes = {
    classes: PropTypes.object,
    message: PropTypes.object
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    info: {
        backgroundColor: theme.palette.primary.dark
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
}))(Message);