import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Icon, Popover, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {Colonne, Element, Ligne} from "../../Commun/Ligne/Ligne";

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
            <Ligne>
                <Colonne style={{flex: 1, padding: '0.5em', margin: 'auto'}}>
                    <Element>
                        {/*<span className={classes.span}>{data.vehBrand}</span>*/}
                        {data.vehBrand}
                    </Element>
                    <Element>
                        {/*<span className={classes.span}>{data.vehModel}</span>*/}
                        {data.vehModel}
                    </Element>
                </Colonne>
                <Colonne style={{flex: 1, padding: '0.5em', margin: 'auto'}}>
                    <Element>
                        {data.vehColor}
                    </Element>
                    <Element>
                        {data.vehRegistration}
                    </Element>
                </Colonne>
                <Colonne style={{flex: 1, padding: '0.5em', margin: 'auto'}}>
                    <Element>
                        {data.vehTypeEssence}
                    </Element>
                    <Element>
                        {data.vehColor}
                    </Element>
                </Colonne>
                <Element>
                    {data.vehNumberplace} places
                </Element>
                <Colonne style={{flex: 1, padding: '0.5em', margin: 'auto'}}>
                    <Element>
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
                    </Element>
                </Colonne>
            </Ligne>
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
    },
    colonne: {
        flex: 1
    }
}))(VehicleListItem);