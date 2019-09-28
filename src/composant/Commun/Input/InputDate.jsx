import 'date-fns';
import frLocale from 'date-fns/locale/fr';
import React from 'react';
import * as PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import FormHelperText from "@material-ui/core/FormHelperText";

const InputDate = props => {

    const {value, onChange, label, message, name} = props;

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                <DatePicker
                    label={label}
                    value={value}
                    format="dd/MM/yyyy"
                    onChange={onChange}
                />
            </MuiPickersUtilsProvider>
            {message && message[name] &&
            <FormHelperText>{message[name][0]}</FormHelperText>
            }
        </React.Fragment>
    );

};

InputDate.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    label: PropTypes.string,
    message: PropTypes.any,
    name: PropTypes.string
};

export default InputDate;