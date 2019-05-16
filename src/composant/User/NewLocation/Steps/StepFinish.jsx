import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from '@material-ui/core/styles/withStyles';
import {formatDate} from "../../../../utils/dateUtils";

const StepFinish = props => {

    const {formulaire, getPole, classes} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Résumé de la demande de location
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Date début de location : <span
                        className={classes.donnee}>{formatDate(formulaire.dateDebutResa)}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Date de fin de location : <span
                        className={classes.donnee}>{formatDate(formulaire.dateFinResa)}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Départ : <span className={classes.donnee}>{getPole(formulaire.poleIdDepart).poleName}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Arrivée : <span
                        className={classes.donnee}>{getPole(formulaire.poleIdDestination).poleName}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Commentaire : <span className={classes.donnee}>{formulaire.comments} </span>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

StepFinish.propTypes = {
    formulaire: PropTypes.object,
    getPole: PropTypes.func
};

export default withStyles({
    donnee: {
        fontWeight: 'bold'
    }
})(StepFinish);