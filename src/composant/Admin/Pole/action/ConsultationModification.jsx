import React, {useEffect, useState} from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../../Commun/Popup/Popup";
import InputText from "../../../Commun/Input/InputText";

const ConsultationModification = props => {

    const [state, setState] = useState(props.state);

    useEffect(() => {
        if (props.state !== state) {
            setState(props.state);
        }
    }, [props.state]);

    const getButtonName = () => {
        return state === "new" ? "Ajouter" : state === "view" ? "Modifier" : "Enregistrer"
    };

    const getButtonFunction = () => {
        return state === "new" ? props.onAccept() : state === "view" ? setState("update") : props.onUpdate()
    };

    return (
        <Popup
            open={props.open}
            title={"Pôle"}
            onClose={props.onClose}
            firstActionTxt={getButtonName()}
            firstActionFunc={getButtonFunction}
            thirdActionFunc={props.onClose}
        >
            <InputText
                id="poleName"
                name={"PoleName"}
                label="Nom"
                value={props.data.poleName || ""}
                disabled={state === "view"}
                onChange={(event => props.onUpdateField(event, "poleName"))}
            />
            <InputText
                id={"poleCity"}
                name={"PoleCity"}
                label={"Ville"}
                value={props.data.poleCity || ""}
                disabled={state === "view"}
                onChange={event => props.onUpdateField(event, "poleCity")}
            />
            <InputText
                id={"poleAddress"}
                name={"PoleAddress"}
                label={"Adresse"}
                value={props.data.poleAddress || ""}
                disabled={state === "view"}
                onChange={event => props.onUpdateField(event, "poleAddress")}
            />
            <InputText
                id={"poleCp"}
                name={"PoleCp"}
                label={"Code Postal"}
                type={"number"}
                value={props.data.poleCp || ""}
                disabled={state === "view"}
                onChange={event => props.onUpdateField(event, "poleCp")}
            />
        </Popup>
    )
};

ConsultationModification.defaultProps = {
    data: {},
    state: ''
};

ConsultationModification.propTypes = {
    open: PropTypes.bool.isRequired,
    state: PropTypes.string,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onUpdate: PropTypes.func,
    onUpdateField: PropTypes.func
};

export default ConsultationModification;