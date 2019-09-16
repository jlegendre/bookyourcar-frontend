import {addDays, format, isDate, isValid, isWithinInterval, parseISO, startOfDay, startOfWeek, subDays} from 'date-fns';

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
    dateDebut = startOfDay(parseISO(dateDebut));
    dateFin = startOfDay(parseISO(dateFin));
    currentDate = parseISO(currentDate);

    let interval = {start: dateDebut, end: dateFin};

    return isWithinInterval(addDays(currentDate, numberOfDay), interval)
};

export const nextWeek = date => {
    return addDays(date, 7);
};

export const previusWeek = date => {
    return subDays(date, 7);
};