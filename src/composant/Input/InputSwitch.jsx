import React from 'react';
import * as PropTypes from 'prop-types';
import {FormControlLabel, Switch} from "@material-ui/core";

const InputSwitch = props => {

    const {label, checked, onChange} = props;

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                />
            }
            label={label}
        />
    )
};


InputSwitch.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default InputSwitch;