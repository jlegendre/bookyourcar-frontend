import React, {useState} from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../../Commun/Popup/Popup";
import InputText from "../../../Commun/Input/InputText";

const Ajouter = props => {

    const [input, setInput] = useState({poleName: '', poleCity: '', poleAddress: '', poleCp: ''});

    const update = ((event, type) => {
        setInput({
            ...input,
            [type]: event.target.value
        });
    });

    return (
        <Popup
            open={props.open}
            title={"Nouveau Pôle"}
            onClose={props.onClose}
            okActionTxt={"Ajouter"}
            okActionFunc={() => props.onAccept(input)}
            annulerActionTxt={"Annuler"}
            annulerActionFunc={props.onClose}
        >
            <InputText
                id="poleName"
                name={"PoleName"}
                label="Nom"
                onChange={event => update(event, "poleName")}
            />
            <InputText
                id={"poleCity"}
                name={"PoleCity"}
                label={"Ville"}
                onChange={event => update(event, "poleCity")}
            />
            <InputText
                id={"poleAddress"}
                name={"PoleAddress"}
                label={"Adresse"}
                onChange={event => update(event, "poleAddress")}
            />
            <InputText
                id={"poleCp"}
                name={"PoleCp"}
                label={"Code Postal"}
                type={"number"}
                onChange={event => update(event, "poleCp")}
            />

        </Popup>
    )
};

Ajouter.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onAccept: PropTypes.func
};

export default Ajouter;