import React from 'react';
import * as PropTypes from 'prop-types';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

const Popup = props => {

    const {title, text, okActionFunc, okActionTxt, annulerActionFunc, annulerActionTxt, cancelActionFunc, cancelActionTxt, children, ...others} = props;

    return (
        <Dialog
            {...others}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
                {children}
            </DialogContent>

            <DialogActions>
                {
                    cancelActionTxt &&
                    <Button onClick={event => cancelActionFunc && cancelActionFunc(event)} color={"primary"}>
                        {cancelActionTxt}
                    </Button>
                }
                {
                    okActionTxt &&
                    <Button onClick={event => okActionFunc && okActionFunc(event)} color={"primary"}>
                        {okActionTxt}
                    </Button>
                }
                {
                    annulerActionTxt &&
                    <Button onClick={event => annulerActionFunc && annulerActionFunc(event)} color={"primary"}>
                        {annulerActionTxt}
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
    annulerActionTxt: PropTypes.string,
    annulerActionFunc: PropTypes.func,
    children: PropTypes.any
};

export default Popup;