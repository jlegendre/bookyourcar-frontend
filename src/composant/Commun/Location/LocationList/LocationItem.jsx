import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {formatDate} from "../../../../utils/dateUtils";
import {Icon} from "@material-ui/core";
import {Colonne, Element, Ligne} from "../../Ligne/Ligne";

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


    return (
        <Ligne onClick={props.onClick}>
            <Colonne>
                <Element>
                    <Icon color={"primary"} className={classes.littleIcon}>access_time</Icon>
                    <span className={classes.span}>{formatDate(data.dateDebutResa)} - {data.poleDepart}</span>
                </Element>
                <Element>
                    <Icon color={"error"} className={classes.littleIcon}>access_time</Icon>
                    <span className={classes.span}>{formatDate(data.dateFinResa)} - {data.poleDestination}</span>
                </Element>
            </Colonne>
            {
                completeView && (
                    <Element>
                        <Icon className={classes.bigIcon}>account_circle</Icon>
                        <span className={classes.span}>{data.userFriendlyName}</span>
                    </Element>
                )
            }
            <Element>
                <Icon className={classes.bigIcon}>directions_car</Icon>
                <span className={classes.span}>{data.vehicleFriendlyName}</span>
            </Element>
            <Element className={classes.item}>
                <Icon className={classes.bigIcon}>{getIconEtatLocation()}</Icon>
                <span className={classes.span}>{data.locationState}</span>
            </Element>
        </Ligne>
    );

};

LocationItem.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object.isRequired,
    completeView: PropTypes.bool
};

export default withStyles({
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