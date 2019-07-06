import React from 'react';
import * as PropTypes from 'prop-types';
import {Dialog, DialogTitle, DialogContentText, DialogActions, Button} from "@material-ui/core";

const Popup = props => {

    const {title, text, okActionFunc, okActionTxt, cancelActionFunc, cancelActionTxt, children, ...others} = props;

    return (
        <Dialog
            {...others}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContentText>{text}</DialogContentText>
            {children}

            <DialogActions>
                {
                    cancelActionTxt &&
                        <Button onClick={event => cancelActionFunc && cancelActionFunc(event)}>
                            {cancelActionTxt}
                        </Button>

                }
                {
                    okActionTxt &&
                        <Button onClick={event => okActionFunc && okActionFunc(event)}>
                            {okActionTxt}
                        </Button>
                }
            </DialogActions>
        </Dialog>
    )
};

Popup.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    okActionTxt: PropTypes.string,
    okActionFunc: PropTypes.func,
    cancelActionTxt: PropTypes.string,
    cancelActionFunc: PropTypes.func,
    children: PropTypes.any
};

export default Popup;