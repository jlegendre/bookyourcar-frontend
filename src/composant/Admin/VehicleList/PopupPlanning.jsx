import React, {useEffect, useState} from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../Commun/Popup/Popup";
import withStyles from "@material-ui/core/styles/withStyles";
import {getBreakingLimit} from "../../../utils/cssUtils";
import {Element} from "../../Commun/Ligne/Ligne";
import {getLibelleOfDayWeek, isIn} from "../../../utils/dateUtils";

const PopupPlanning = props => {

    const {classes, open, onClose, planning, fetchPlanning} = props;

    const [date, setDate] = useState(new Date('2019-05-18'));

    useEffect(() => {
        fetchPlanning(date)
    }, [fetchPlanning, date]);

    return (
        <Popup
            open={open}
            onClose={onClose}
            title={"Planning"}
            fullWidth={true}
            maxWidth={'lg'}
        >
            <div className={classes.main}>
                <HeadPlanning classes={classes} date={date}/>
                <BodyPlanning classes={classes} planning={planning}/>
            </div>
        </Popup>
    )
};


const HeadPlanning = props => {
    const {classes, date} = props;

    return (
        <div className={classes.ligne}>
            <Element/>
            {getLibelleOfDayWeek(date).map((item, i) =>
                <Element key={i}>
                    {item}
                </Element>
            )}
        </div>
    )
};

const BodyPlanning = props => {
    const {classes, planning} = props;

    return (
        <React.Fragment>
            {planning.listOfReservationsByVehicule && planning.listOfReservationsByVehicule.map((item, i) =>
                <div className={classes.ligne} key={i}>
                    <Element>
                        {item.vehName}
                    </Element>
                    <BodyCell day={0} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={1} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={2} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={3} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={4} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={5} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                    <BodyCell day={6} dateDebutSemaine={planning.startWeek} dateFinSemaine={planning.endWeek}
                              vehicule={item.weeklyReservation}/>
                </div>
            )}
        </React.Fragment>
    )
};

const BodyCell = props => {
    const {day, vehicule, dateDebutSemaine, dateFinSemaine} = props;

    let found = false;

    if (vehicule && vehicule.length > 0) {
        vehicule.forEach(v => {
            if (!found) {
                console.log(dateDebutSemaine, v.startDate, day, dateFinSemaine);
                found = isIn(v.startDate, day, dateDebutSemaine, dateFinSemaine);
            }
        });
    }

    if (found) {
        return <Element>X</Element>
    }

    return <Element/>

};

PopupPlanning.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};

export default withStyles((theme) => ({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(getBreakingLimit(theme))]: {
                width: 700,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            [theme.breakpoints.down(getBreakingLimit(theme))]: {
                margin: 0,
                height: '100%'
            }
        },
        ligne: {
            display: 'flex',
            marginBottom: '1em'
        }
    })
)(PopupPlanning);