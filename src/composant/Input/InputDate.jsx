import 'date-fns';
import React from 'react';
import * as PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import FormHelperText from "@material-ui/core/FormHelperText";

const InputDate = props => {

    const {value, onChange, label, message, name} = props;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                label={label}
                value={value}
                onChange={onChange}
            />
            {message && message[name] &&
            <FormHelperText>{message[name][0]}</FormHelperText>
            }
        </MuiPickersUtilsProvider>
    );

};

InputDate.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    message: PropTypes.array,
    name: PropTypes.string
}

export default InputDate;