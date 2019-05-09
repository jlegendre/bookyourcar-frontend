import React from 'react';
import * as PropTpyes from 'prop-types';
import {FormControl, Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const InputSelect = props => {

    const {fullWidth, onChange, value, data, name, label, message} = props;

    return (
        <FormControl margin={"normal"} fullWidth={fullWidth}>
            <InputLabel>{label}</InputLabel>
            <Select
                onChange={onChange}
                value={value}
                error={message && !!message[name]}
            >
                {data && data.map((item, i) =>
                    <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                )}
            </Select>
            {message && message[name] &&
                <FormHelperText>{message[name][0]}</FormHelperText>
            }

        </FormControl>
    )

};

InputSelect.defaultProps = {
    fullWidth: true
};

InputSelect.propTypes = {
    data: PropTpyes.array,
    fullWidth: PropTpyes.bool,
    onChange: PropTpyes.func,
    value: PropTpyes.any,
    name: PropTpyes.string,
    label: PropTpyes.string
};


export default InputSelect;