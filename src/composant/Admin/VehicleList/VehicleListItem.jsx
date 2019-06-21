import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {Icon, Popover, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";

/**
 * Répresente un item d'une liste de véhicule
 * @param props
 * @return {*}
 * @constructor
 */
const VehicleListItem = props => {

    const {classes, data} = props;

    const [popupEtat, setPopupEtat] = useState(null);

    const open = Boolean(popupEtat);

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
                    <Typography
                        aria-owns={open ? `mouse-open-popup-etat-${data.vehId}` : undefined}
                        aria-haspopup={"true"}
                        onMouseEnter={event => setPopupEtat(event.currentTarget)}
                        onMouseLeave={() => setPopupEtat(null)}
                    >
                        <Icon
                            style={{'fontSize': '3em'}}
                            color={data.vehIsactive ? "primary" : "error"}
                        >
                            fiber_manual_record
                        </Icon>
                    </Typography>
                    <Popover
                        id={`mouse-open-popup-etat-${data.vehId}`}
                        anchorEl={popupEtat}
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        transformOrigin={{vertical: 'center', horizontal: 'center'}}
                        open={open}
                        className={classes.popover}
                        classes={{paper: classes.paper}}
                        onClose={() => setPopupEtat(null)}
                        disableRestoreFocus
                    >
                        <Typography>{data.vehIsactive ? "Activé" : "Désactivé"}</Typography>
                    </Popover>
                </div>
            </Paper>
        </Link>
    )
};

VehicleListItem.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object.isRequired
};

export default withStyles(theme => ({
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
    },
    popover: {
        pointerEvents: 'none'
    },
    paper: {
        padding: 10
    }
}))(VehicleListItem);