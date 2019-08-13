import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {getBreakingLimit} from "../../../../../utils/cssUtils";
import Popup from "../../../Popup/Popup";

const PopupValidateReservation = props => {

    const {classes, data, open, onClose} = props;

    if(!data) {
        return (<React.Fragment/>)
    }

    return (
        <Popup
            open={open}
            onClose={onClose}
            title={"Status : Location"}
            okActionTxt={"Modifier"}
            okActionFunc={() => console.log("ok")}
            cancelActionTxt={"Annuler"}
            cancelActionFunc={() => onClose && onClose()}
        >
            {data && (
                <div className={classes.main}>
                    <CssBaseline/>
                    <form className={classes.form}>
                        <div className={classes.formInput}>
                            Location N°{data.locationId}
                        </div>
                    </form>
                </div>
            )}
        </Popup>
    );
};

PopupValidateReservation.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func
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
        form: {
            [theme.breakpoints.down(getBreakingLimit(theme))]: {
                height: '100%'
            }
        },
        formInput: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
            marginTop: theme.spacing.unit * 3,
        },
        link: {
            float: 'right',
            marginTop: theme.spacing.unit * 2
        }
    })
)(PopupValidateReservation);