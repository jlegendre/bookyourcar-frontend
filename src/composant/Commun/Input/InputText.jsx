import React from "react";
import * as PropTypes from "prop-types";
import {FormControl, TextField} from "@material-ui/core";


/**
 * Composant de saisie de text
 * Il integre les erreurs liée au api concernant le champs
 *
 * @param props les paramètres du composant
 *
 * @returns {*}
 * @constructor
 */
const InputText = (props) => {

    const {name, dispatch, onChange, message, value, max, fullWidth, format, ...others} = props;

    const checkRequired = (event) => {
        //vérification de la longeueur
        if(max && event.target.value.length > max) {
           return;
        }

        //vérification du format telephone
        if("phone" === format && isNaN(event.target.value)) {
            return;
        }

        onChange && onChange(event);
    };

    return (
        <FormControl margin={"normal"} fullWidth={fullWidth}>
            <TextField
                name={name}
                value={value}
                onChange={(event) => checkRequired(event)}
                error={message && !!message[name]}
                helperText={message && message[name] && message[name][0]}
                {...others}
            />
        </FormControl>
    )
};

InputText.defaultProps = {
    fullWidth: true,
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    message: PropTypes.any,
    InputLabelProps: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.number,
    format: PropTypes.string
};

export default InputText