import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import _ from 'lodash';

import {SnackbarProvider, withSnackbar} from "notistack/build/index";

/**
 * Composant qui permet de gerer l'aparition des message
 */
const MessageFragment = withSnackbar(props => {

    const {message, enqueueSnackbar, setNoMessageFor} = props;

    useEffect(() => {
        _.each(message, (text, type) => {
            if (type === "Success" || type === "Info" || type === "Warning" || type === "Error") {
                enqueueSnackbar(text, {
                    variant: type.toLowerCase()
                });
                setNoMessageFor(type);
            }
        });

    }, [message, enqueueSnackbar, setNoMessageFor]);

    return (
        <React.Fragment/>
    )
});

/**
 * Composant qui englobe les messages d'erreur
 */
const Message = props => {

    return (
        <SnackbarProvider anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <MessageFragment {...props} />
        </SnackbarProvider>
    )
};

Message.propTypes = {
    classes: PropTypes.object,
    message: PropTypes.any,
    setNoMessageFor: PropTypes.func
};

export default Message;