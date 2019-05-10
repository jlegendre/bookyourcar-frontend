import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import InputText from "../../../Input/InputText.js";
import InputSelect from "../../../Input/InputSelect.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const StepInformation = props => {

    const {fetchPoles, poles, formulaire, setFormulaire} = props;

    useEffect(() => {
        fetchPoles();
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Information
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateDebut"}
                        name={"dateDebut"}
                        label={"Date début"}
                        type={"date"}
                        value={formulaire.dateDebutResa}
                        onChange={event => setFormulaire({...formulaire, dateDebutResa: event.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateFin"}
                        name={"dateFin"}
                        label={"Date fin"}
                        type={"date"}
                        value={formulaire.dateFinResa}
                        onChange={event => setFormulaire({...formulaire, dateFinResa: event.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        label={"Pole Début"}
                        name={"PoleDebut"}
                        value={formulaire.poleIdDepart}
                        onChange={event => setFormulaire({...formulaire, poleIdDepart: event.target.value})}
                        data={poles}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        label={"Pole Fin"}
                        name={"PoleFin"}
                        value={formulaire.poleIdDestination}
                        onChange={event => setFormulaire({...formulaire, poleIdDestination: event.target.value})}
                        data={poles}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

StepInformation.propTypes = {
    poles: PropTypes.array,
    fetchPoles: PropTypes.func,
    formulaire: PropTypes.object,
    setFormulaire: PropTypes.func
};

export default StepInformation;