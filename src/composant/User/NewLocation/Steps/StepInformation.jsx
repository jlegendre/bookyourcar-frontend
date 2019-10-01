import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import InputSelect from "../../../Commun/Input/InputSelect.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputSwitch from "../../../Commun/Input/InputSwitch";
import InputDate from "../../../Commun/Input/InputDate.js";

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

        if (event.target.checked) {
            setFormulaire({...formulaire, poleIdDestination: formulaire.poleIdDepart})
        }
    }

    /**
     * Fonction qui permet de gérer la modification du pole de départ
     * @param event
     */
    const handlePoleDepart = event => {
        let id = event.target.value;
        if (samePole) {
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
                    <InputDate
                        label={"Date de début"}
                        id={"dateDebut"}
                        name={"dateDebutResa"}
                        value={formulaire.dateDebutResa}
                        onChange={date => setFormulaire({...formulaire, dateDebutResa: date})}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputDate
                        label={"Date de fin"}
                        id={"dateFin"}
                        name={"dateFinResa"}
                        value={formulaire.dateFinResa}
                        onChange={date => setFormulaire({...formulaire, dateFinResa: date})}
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