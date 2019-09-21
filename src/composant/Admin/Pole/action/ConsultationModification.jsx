import React, {useEffect, useState} from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../../Commun/Popup/Popup";
import InputText from "../../../Commun/Input/InputText";

const VIEW = "view";
const NEW = "new";
const UPDATE = "update";

const ConsultationModification = props => {

    const [state, setState] = useState(props.state);

    useEffect(() => {
        if (props.state !== state && state !== UPDATE) {
            setState(props.state);
        }
    }, [props.state, state]);

    const getButtonName = () => {
        return state === NEW ? "Ajouter" : state === VIEW ? "Modifier" : "Enregistrer"
    };

    const getButtonFunction = () => {
        if(state === NEW) {
            setState(VIEW);
            props.onAccept()
        } else if(state === VIEW) {
            setState(UPDATE)
        } else {
            setState(VIEW);
            props.onUpdate()
        }
    };

    const onClose = event => {
        setState(VIEW);
        props.onClose(event);
    };

    return (
        <Popup
            open={props.open}
            title={"Pôle"}
            onClose={onClose}
            firstActionTxt={getButtonName()}
            firstActionFunc={getButtonFunction}
            thirdActionFunc={onClose}
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