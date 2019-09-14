import React, {useEffect, useState} from "react";
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {getBreakingLimit} from "../../../utils/cssUtils";
import {Element} from "../../Commun/Ligne/Ligne";
import {formatDate, getLibelleOfDayWeek, isIn, nextWeek, previusWeek} from "../../../utils/dateUtils";
import Paper from "@material-ui/core/Paper";
import {CssBaseline, Grid, Typography} from "@material-ui/core";

const Planning = props => {

    const {classes, planning, fetchPlanning} = props;

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        fetchPlanning(date)
    }, [fetchPlanning, date]);

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Grid container spacing={24}>

                    <Grid item xs={12} md={4}>
                        <Paper style={{marginBottom: 24}}>
                            Graph
                        </Paper>
                        <Paper style={{marginBottom: 24, textAlign: 'center'}}>
                            <Typography>
                                Début des locations cette semaine
                            </Typography>
                            <Typography gutterBottom variant={"h3"} component={"h3"} color={'primary'}>
                                {planning.startReservationCount}
                            </Typography>
                        </Paper>
                        <Paper style={{textAlign: 'center'}}>
                            <Typography>
                                Début des locations cette semaine
                            </Typography>
                            <Typography gutterBottom variant={"h3"} component={"h3"} color={"error"}>
                                {planning.endReservationCount}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper>
                            <HeadPlanning classes={classes} date={date} updateDate={setDate} planning={planning} />
                            <BodyPlanning classes={classes} planning={planning}/>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </React.Fragment>
    )
};


const HeadPlanning = props => {
    const {classes, date, planning, updateDate} = props;

    return (
        <React.Fragment>
            <div className={classes.ligne}>
                <Element style={{textAlign: 'right', cursor: 'pointer'}} onClick={() => updateDate(previusWeek(date))}>
                    &lt;
                </Element>
                <Element style={{textAlign: 'center'}}>
                    {formatDate(planning.startWeek, 'dd/MM/YYYY') + ' - ' + formatDate(planning.endWeek, 'dd/MM/YYYY')}
                </Element>
                <Element style={{textAlign: 'left', cursor: 'pointer'}} onClick={() => updateDate(nextWeek(date))}>
                    &gt;
                </Element>

            </div>
            <div className={classes.ligne}>
                <Element/>
                {getLibelleOfDayWeek(date).map((item, i) =>
                    <Element key={i}>
                        {item}
                    </Element>
                )}
            </div>
        </React.Fragment>
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
                    <BodyCell day={0} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={1} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={2} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={3} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={4} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={5} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                    <BodyCell day={6} dateDebutSemaine={planning.startWeek} vehicule={item.weeklyReservation}/>
                </div>
            )}
        </React.Fragment>
    )
};

const BodyCell = props => {
    const {day, vehicule, dateDebutSemaine} = props;

    let found = false;

    if (vehicule && vehicule.length > 0) {
        vehicule.forEach(v => {
            if (!found) {
                found = isIn(dateDebutSemaine, day, v.startDate, v.endDate);
            }
        });
    }

    if (found) {
        return <Element style={{backgroundColor: '#49AAB3'}}/>
    }

    return <Element/>

};

Planning.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};

export default withStyles((theme) => (
    {
        layout: {
            width: 'auto',
            marginLeft: theme.spacing.unit * 2,
            marginRight: theme.spacing.unit * 2,
            height: '100%',
            [theme.breakpoints.up(getBreakingLimit(theme))]: {
                width: 1400,
                margin: 'auto'
            }
        },
        ligne: {
            display: 'flex',
            marginBottom: '1em'
        }
    }
))(Planning);