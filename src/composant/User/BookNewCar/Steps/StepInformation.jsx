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
                        value={formulaire.dateDebut}
                        onChange={event => setFormulaire({...formulaire, dateDebut: event.target.value})}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateFin"}
                        name={"dateFin"}
                        label={"Date fin"}
                        type={"date"}
                        value={formulaire.dateFin}
                        onChange={event => setFormulaire({...formulaire, dateFin: event.target.value})}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        label={"Pole Début"}
                        name={"PoleDebut"}
                        value={formulaire.poleDebut}
                        onChange={event => setFormulaire({...formulaire, poleDebut: event.target.value})}
                        data={poles}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        label={"Pole Fin"}
                        name={"PoleFin"}
                        value={formulaire.poleFin}
                        onChange={event => setFormulaire({...formulaire, poleFin: event.target.value})}
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