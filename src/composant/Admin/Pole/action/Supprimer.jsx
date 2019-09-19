import React from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../../Commun/Popup/Popup";

const Supprimer = props => {

    return (
        <Popup
            open={props.open}
            title={"Suppression Pole"}
            onClose={props.onClose}
            okActionTxt={"Confirmer"}
            okActionFunc={props.onAccept}
            annulerActionTxt={"Annuler"}
            annulerActionFunc={props.onClose}
            text={"êtes vous sur de vouloir supprimer le(s) pôle(s) sélectionné(s)"}
        />
    )
};

Supprimer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onAccept: PropTypes.func
};

export default Supprimer;