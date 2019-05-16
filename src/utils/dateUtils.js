import {format} from 'date-fns';

export const isValidDate = d => {
    return d instanceof Date && !isNaN(d);
};

export const formatDate = d => {
    if(isValidDate(d)) {
        return format(d, 'dd/MM/YYYY', {
            awareOfUnicodeTokens: true
        })
    }

    return 'Not a date';
}