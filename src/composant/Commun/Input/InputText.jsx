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

    const {name, dispatch, onChange, message, value, max, fullWidth, ...others} = props;

    const checkRequired = (event) => {
        if(max && event.target.value > max) {
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
    value: PropTypes.string,
    max: PropTypes.number
};

export default InputText