import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const StepFinish = props => {

    const {formulaire, getPole} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Résumer de la demande de location
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    Date début de location : {formulaire.dateDebutResa}
                </Grid>
                <Grid item xs={12} md={6}>
                    Date de fin de location : {formulaire.dateFinResa}
                </Grid>
                <Grid item xs={12} md={6}>
                    Départ : {getPole(formulaire.poleIdDepart).poleName}
                </Grid>
                <Grid item xs={12} md={6}>
                    Arrivée : {getPole(formulaire.poleIdDestination).poleName}
                </Grid>
                <Grid item xs={12}>
                    Commentaire : {formulaire.comments}
                </Grid>
            </Grid>

        </React.Fragment>
    )
};

StepFinish.propTypes = {
    formulaire: PropTypes.object,
    getPole: PropTypes.func
};

export default StepFinish;