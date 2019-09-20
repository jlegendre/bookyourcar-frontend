import React from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../../Commun/Popup/Popup";

const Supprimer = props => {

    return (
        <Popup
            open={props.open}
            title={"Suppression Pole"}
            onClose={props.onClose}
            firstActionTxt={"Confirmer"}
            firstActionFunc={props.onAccept}
            thirdActionTxt={"Annuler"}
            thirdActionFunc={props.onClose}
            text={"êtes vous sur de vouloir supprimer le(s) pôle(s) sélectionné(s)"}
        />
    )
};

Supprimer.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired
};

export default Supprimer;