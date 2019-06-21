import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {Icon} from "@material-ui/core";

/**
 * Répresente un item d'une liste de véhicule
 * @param props
 * @return {*}
 * @constructor
 */
const VehicleListItem = props => {

    const {classes, data} = props;


    if (!data) {
        return <React.Fragment/>
    }

    return (
        <Link to={`/vehicle/${data.vehId}`} className={classes.link}>
            <Paper className={classes.wrapper}>
                <div className={classes.column}>
                    <div className={classes.item}>
                        <span className={classes.span}>{data.vehBrand}</span>
                    </div>
                    <div className={classes.item}>
                        <span className={classes.span}>{data.vehModel}</span>
                    </div>
                </div>
                <div className={classes.item}>
                    <span className={classes.span}>{data.vehColor}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.span}>{data.vehRegistration}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.span}>{data.vehTypeEssence}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.span}>{data.vehColor}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.span}>{data.vehNumberplace} places</span>
                </div>
                <div className={classes.item}>
                    <Icon style={{'fontSize':'3em'}} color={data.vehIsactive ? "primary" : "error"}>fiber_manual_record</Icon>
                </div>
            </Paper>
        </Link>
    )
};

VehicleListItem.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object.isRequired
};

export default withStyles({
    wrapper: {
        display: 'flex',
        marginBottom: '0.5em'
    },
    column: {
        flexDirection: 'column'
    },
    item: {
        flex: 1,
        padding: '0.5em',
        textAlign: 'center',
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
})(VehicleListItem);