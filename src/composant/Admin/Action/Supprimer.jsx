import React from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../Commun/Popup/Popup";

const Supprimer = props => {

    return (
        <Popup
            open={props.open}
            title={props.title}
            onClose={props.onClose}
            firstActionTxt={"Confirmer"}
            firstActionFunc={props.onAccept}
            closeActionTxt={"Annuler"}
            text={props.text}
        />
    )
};

Supprimer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired
};

export default Supprimer;