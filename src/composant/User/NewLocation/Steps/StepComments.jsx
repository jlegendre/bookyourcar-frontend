import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputText from "../../../Commun/Input/InputText";

const StepComments = props => {

    const {formulaire, setFormulaire} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Commentaire
            </Typography>
            <Grid container spacing={24}>
                <InputText
                    id={"comments"}
                    name={"comments"}
                    label={"Commentaire sur la réservation"}
                    value={formulaire.comments}
                    onChange={event => setFormulaire({...formulaire, comments: event.target.value})}
                />
            </Grid>
        </React.Fragment>
    )
};

StepComments.propTypes = {
    formulaire: PropTypes.object,
    setFormulaire: PropTypes.func
}

export default StepComments;