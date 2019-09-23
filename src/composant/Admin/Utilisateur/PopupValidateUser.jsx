import React from 'react';
import * as PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Popup from "../../Commun/Popup/Popup";
import {getBreakingLimit} from "../../../utils/cssUtils";

const PopupValidateUser = props => {

    const {classes, data, open, onClose, onAccept, onRefuser} = props;

    return (
        <Popup
            open={open}
            onClose={onClose}
            title={"Validation de l'utilisateur"}
            firstActionTxt={"Accepter"}
            firstActionFunc={() => onAccept(data.userId)}
            secondActionTxt={"Refuser"}
            secondActionFunc={() => onRefuser(data.userId)}
            thirdActionTxt={"Annuler"}
            thirdActionFunc={onClose}
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline/>
                    <div className={classes.formInput}>
                        <div> Nom : {data.userName}</div>
                        <div> Prénom : {data.userFirstname} </div>
                        <div> Téléphone : {data.userPhone} </div>
                        <div> Email : {data.userEmail} </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

PopupValidateUser.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onRefuser: PropTypes.func
};

export default withStyles((theme) => ({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(getBreakingLimit(theme))]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            [theme.breakpoints.down(getBreakingLimit(theme))]: {
                margin: 0,
                height: '100%'
            }
        },
        formInput: {
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        }
    })
)(PopupValidateUser);