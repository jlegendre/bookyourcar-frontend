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

    const {id, name, onChange, message} = props;


    return (
        <FormControl margin={"normal"} fullWidth>
            <TextField
                id={id}
                name={name}
                onChange={(event) => onChange && onChange(event)}
                error={message && !!message[name]}
                helperText={message && message[name] && message[name][0]}
                {...props}
            />
        </FormControl>
    )
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    message: PropTypes.object
};

export default InputText