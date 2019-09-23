import React from "react";
import * as PropTypes from 'prop-types';
import Popup from "../../Commun/Popup/Popup";

export const VIEW = "view";
export const NEW = "new";
export const UPDATE = "update";

const ConsultationModification = props => {

    const getButtonName = () => {
        return props.state === NEW ? "Ajouter" : props.state === VIEW ? "Modifier" : "Enregistrer"
    };

    const getButtonFunction = () => {
        if (props.state === NEW) {
            props.onChangeState(VIEW);
            props.onAccept()
        } else if (props.state === VIEW) {
            props.onChangeState(UPDATE)
        } else {
            props.onChangeState(VIEW);
            props.onUpdate()
        }
    };

    const onClose = event => {
        props.onChangeState(VIEW);
        props.onClose(event);
    };

    return (
        <Popup
            open={props.open}
            title={props.title}
            onClose={onClose}
            firstActionTxt={getButtonName()}
            firstActionFunc={getButtonFunction}
            thirdActionFunc={onClose}
        >
            {props.children}
        </Popup>
    )
};

ConsultationModification.defaultProps = {
    data: {},
};

ConsultationModification.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    state: PropTypes.string,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onAccept: PropTypes.func,
    onUpdate: PropTypes.func,
    onChangeState: PropTypes.func
};

export default ConsultationModification;
