import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from '@material-ui/core/styles/withStyles';

const StepFinish = props => {

    const {formulaire, getPole, classes} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Résumer de la demande de location
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    Date début de location : <span className={classes.donnee}>{formulaire.dateDebutResa}</span>
                </Grid>
                <Grid item xs={12} md={6}>
                    Date de fin de location : <span className={classes.donnee}>{formulaire.dateFinResa}</span>
                </Grid>
                <Grid item xs={12} md={6}>
                    Départ : <span className={classes.donnee}>{getPole(formulaire.poleIdDepart).poleName}</span>
                </Grid>
                <Grid item xs={12} md={6}>
                    Arrivée : <span className={classes.donnee}>{getPole(formulaire.poleIdDestination).poleName}</span>
                </Grid>
                <Grid item xs={12}>
                    Commentaire : <span className={classes.donnee}>{formulaire.comments}</span>
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