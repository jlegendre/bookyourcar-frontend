import React from "react";
import * as PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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

    const {id, name, placeholder, onChange, type, error} = props;

    return (
        <FormControl margin={"normal"} fullWidth>
            <TextField
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={(event) => onChange && onChange(event)}
                type={type}
                error={!!error[name]}
                helperText={error[name] && error[name][0]}
            />
        </FormControl>
    )
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    error: PropTypes.object
};

export default InputText