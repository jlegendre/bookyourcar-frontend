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

    const {id, name, onChange, message, fullWidth, required, label, type, InputLabelProps, value} = props;


    return (
        <FormControl margin={"normal"} fullWidth={fullWidth}>
            <TextField
                id={id}
                name={name}
                onChange={(event) => onChange && onChange(event)}
                error={message && !!message[name]}
                helperText={message && message[name] && message[name][0]}
                required={required}
                label={label}
                type={type}
                value={value}
                InputLabelProps={InputLabelProps}
            />
        </FormControl>
    )
};

InputText.defaultProps = {
    fullWidth: true
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    message: PropTypes.any,
    required: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    InputLabelProps: PropTypes.object,
    value: PropTypes.string
};

export default InputText