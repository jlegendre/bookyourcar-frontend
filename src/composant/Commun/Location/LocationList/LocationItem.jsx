import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import {formatDate} from "../../../../utils/dateUtils";
import {Icon} from "@material-ui/core";

/**
 * Répresente un item d'une liste de location
 * @param props
 * @return {*}
 * @constructor
 */
const LocationItem = props => {

    const {classes, data, completeView} = props;


    if (!data) {
        return <React.Fragment/>
    }

    const getIconEtatLocation = () => {
        switch (data.locationStateId) {
            case 0:
                //Asked
                return "timer";
            case 1:
                //In progress
                return "play_arrow";
            case 2:
                //Validated
                return "done";
            case 3:
                //Rejected
                return "close";
            case 4:
                //Finished
                return "check";
            case 5:
                //Canceled
                return "cancel";
            default:
                return ""
        }
    };


    const item = (
        <Paper className={classes.wrapper} onClick={props.onClick}>
            <div className={classes.column}>
                <div className={classes.item}>
                    <Icon color={"primary"} className={classes.littleIcon}>access_time</Icon>
                    <span className={classes.span}>{formatDate(data.dateDebutResa)} - {data.poleDepart}</span>
                </div>
                <div className={classes.item}>
                    <Icon color={"error"} className={classes.littleIcon}>access_time</Icon>
                    <span className={classes.span}>{formatDate(data.dateFinResa)} - {data.poleDestination}</span>
                </div>
            </div>
            {
                completeView && (
                    <div className={classes.item}>
                        <Icon className={classes.bigIcon}>account_circle</Icon>
                        <span className={classes.span}>{data.userFriendlyName}</span>
                    </div>
                )
            }
            <div className={classes.item}>
                <Icon className={classes.bigIcon}>directions_car</Icon>
                <span className={classes.span}>{data.vehicleFriendlyName}</span>
            </div>
            <div className={classes.item}>
                <Icon className={classes.bigIcon}>{getIconEtatLocation()}</Icon>
                <span className={classes.span}>{data.locationState}</span>
            </div>
        </Paper>
    );

    return item;

};

LocationItem.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object.isRequired,
    completeView: PropTypes.bool
};

export default withStyles({
    wrapper: {
        display: 'flex',
        marginBottom: '1em'
    },
    column: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: 250
    },
    item: {
        flex: 1,
        padding: '0.5em',
        // textAlign: 'center',
        margin: 'auto'
    },
    span: {
        verticalAlign: 'middle'
    },
    littleIcon: {
        fontSize: '2em',
        verticalAlign: 'middle'
    },
    bigIcon: {
        fontSize: '3em',
        verticalAlign: 'middle',
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
})(LocationItem);