import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import InputText from "../../../Input/InputText.js";
import InputSelect from "../../../Input/InputSelect.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputSwitch from "../../../Input/InputSwitch";

const StepInformation = props => {

    const {fetchPoles, poles, formulaire, setFormulaire} = props;

    const [samePole, setSamePole] = useState(true);

    useEffect(() => {
        fetchPoles();
    }, [fetchPoles]);


    /**
     * Fonction qui permet gérer le changement du same pole
     * @param event
     */
    const handleChangeSamePole = event => {
        setSamePole(event.target.checked);

        if(event.target.checked) {
            setFormulaire({...formulaire, poleIdDestination: formulaire.poleIdDepart})
        }
    }

    /**
     * Fonction qui permet de gérer la modification du pole de départ
     * @param event
     */
    const handlePoleDepart = event => {
        let id = event.target.value;
        if(samePole) {
            setFormulaire({...formulaire, poleIdDepart: id, poleIdDestination: id})
        } else {
            setFormulaire({...formulaire, poleIdDepart: id})
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Information
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateDebut"}
                        name={"dateDebutResa"}
                        label={"Date début"}
                        type={"date"}
                        value={formulaire.dateDebutResa}
                        onChange={event => setFormulaire({...formulaire, dateDebutResa: event.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputText
                        id={"dateFin"}
                        name={"dateFinResa"}
                        label={"Date fin"}
                        type={"date"}
                        value={formulaire.dateFinResa}
                        onChange={event => setFormulaire({...formulaire, dateFinResa: event.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputSelect
                        label={"Pole Début"}
                        name={"poleIdDepart"}
                        value={formulaire.poleIdDepart}
                        onChange={handlePoleDepart}
                        data={poles}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    {!samePole &&
                        <InputSelect
                            label={"Pole Fin"}
                            name={"poleIdDestination"}
                            value={formulaire.poleIdDestination}
                            onChange={event => setFormulaire({...formulaire, poleIdDestination: event.target.value})}
                            data={poles}
                        />
                    }
                </Grid>
                <Grid item xs={12}>
                    <InputSwitch
                        onChange={handleChangeSamePole}
                        label={"Même pôle de retour ?"}
                        checked={samePole}
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