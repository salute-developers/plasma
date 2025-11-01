type GetMaskedValueArgs = {
    selectionStart: number | null;
    value?: string;
    prevValue?: string;
    format?: string;
    delimiters?: string[];
};

export const getMaskedValue = ({ value, prevValue, format, delimiters, selectionStart }: GetMaskedValueArgs) => {
    if (!value) {
        return { formattedValue: '', selectionStart: 0 };
    }

    if (!format || !delimiters?.length) {
        return { formattedValue: value, selectionStart };
    }

    const currentSelection = selectionStart || 0;

    const dateRegExp = new RegExp(`[^0-9${delimiters.join('')}]`, 'g');
    const formattedValue = value.replace(dateRegExp, '');

    if (formattedValue.length >= format.length) {
        return { formattedValue: formattedValue.slice(0, format.length), selectionStart };
    }

    if (prevValue && formattedValue.length < prevValue.length) {
        if (delimiters.includes(format[currentSelection])) {
            return {
                formattedValue: formattedValue.slice(0, currentSelection - 1),
                selectionStart: currentSelection - 1,
            };
        }
    }

    if (delimiters.includes(format[currentSelection])) {
        return {
            formattedValue: formattedValue + format[currentSelection],
            selectionStart: currentSelection + 1,
        };
    }

    return { formattedValue, selectionStart: currentSelection };
};
