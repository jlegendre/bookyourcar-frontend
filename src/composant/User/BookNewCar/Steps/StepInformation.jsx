import React, {useEffect} from 'react';
import _ from 'lodash';
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

    //Construction de la liste pour les Selects
    const listPole = [];
    _.each(poles, pole => {
        listPole.push({value: pole.poleId, label: pole.poleName})
    });

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
                        type={"datetime-local"}
                        value={formulaire.dateDebut}
                        onChange={event => setFormulaire({...formulaire, dateDebut: event.target.value})}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateFin"}
                        name={"dateFin"}
                        label={"Date fin"}
                        type={"datetime-local"}
                        value={formulaire.dateFin}
                        onChange={event => setFormulaire({...formulaire, dateFin: event.target.value})}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        fullWidth
                        label={"Pole Début"}
                        name={"PoleDebut"}
                        value={formulaire.poleDebut}
                        onChange={event => setFormulaire({...formulaire, poleDebut: event.target.value})}
                        data={listPole}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        fullWidth
                        label={"Pole Fin"}
                        name={"PoleFin"}
                        value={formulaire.poleFin}
                        onChange={event => setFormulaire({...formulaire, poleFin: event.target.value})}
                        data={listPole}
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