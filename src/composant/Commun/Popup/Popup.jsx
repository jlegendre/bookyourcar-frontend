import React from 'react';
import * as PropTypes from 'prop-types';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

const Popup = props => {

    const {title, text, firstActionFunc, firstActionTxt, thirdActionFunc, thirdActionTxt, secondActionFunc, secondActionTxt, children, closeActionTxt, ...others} = props;

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
                    firstActionTxt &&
                    <Button onClick={event => firstActionFunc && firstActionFunc(event)} color={"primary"}>
                        {firstActionTxt}
                    </Button>
                }
                {
                    secondActionTxt &&
                    <Button onClick={event => secondActionFunc && secondActionFunc(event)} color={"primary"}>
                        {secondActionTxt}
                    </Button>
                }
                {
                    thirdActionTxt &&
                    <Button onClick={event => thirdActionFunc && thirdActionFunc(event)} color={"primary"}>
                        {thirdActionTxt}
                    </Button>
                }
                <Button onClick={props.onClose} color={"primary"}>{closeActionTxt}</Button>
            </DialogActions>
        </Dialog>
    )
};

Popup.defaultProps = {
    closeActionTxt: 'Fermer'
};

Popup.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    firstActionTxt: PropTypes.string,
    firstActionFunc: PropTypes.func,
    secondActionTxt: PropTypes.string,
    secondActionFunc: PropTypes.func,
    thirdActionTxt: PropTypes.string,
    thirdActionFunc: PropTypes.func,
    closeActionTxt: PropTypes.string,
    children: PropTypes.any
};

export default Popup;