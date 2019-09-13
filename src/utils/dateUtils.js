import {addDays, format, isDate, isWithinInterval, isValid, parseISO, startOfWeek} from 'date-fns';

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

export const formatDate = (d, formatDate) => {
    if (isValidDate(d)) {

        if (d instanceof Object) {
            return format(d, formatDate || 'dd/MM/YYYY', {
                awareOfUnicodeTokens: true
            })
        }

        return format(parseISO(d), formatDate || 'dd/MM/YYYY', {
            awareOfUnicodeTokens: true
        })
    }

    return 'Not a date';
};

export const getLibelleOfDayWeek = d => {
    let startDate = startOfWeek(d, {weekStartsOn: 1});

    return [
        format(startDate, 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 1), 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 2), 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 3), 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 4), 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 5), 'E dd', {awareOfUnicodeTokens: true}),
        format(addDays(startDate, 6), 'E dd', {awareOfUnicodeTokens: true})
    ]
};

export const isIn = (currentDate, numberOfDay, dateDebut, dateFin) => {
    return isWithinInterval(addDays(parseISO(currentDate), numberOfDay), {start: parseISO(dateDebut), end: parseISO(dateFin)})
};