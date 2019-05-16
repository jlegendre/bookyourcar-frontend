import {format, isDate, isValid, parseISO} from 'date-fns';

/**
 * Check if is valid date
 * @param d date
 * @return {boolean} success
 */
export const isValidDate = d => {
    if (isDate(d)) {
        return isValid(d);
    }
    return !isNaN(parseISO(d).getTime());
};

export const formatDate = d => {
    if (isValidDate(d)) {
        return format(parseISO(d), 'dd/MM/YYYY', {
            awareOfUnicodeTokens: true
        })
    }

    return 'Not a date';
}