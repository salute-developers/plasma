export const getFieldPattern = (allowedSymbols: RegExp | string) => {
    if (!allowedSymbols) {
        return null;
    }

    if (typeof allowedSymbols === 'string') {
        return new RegExp(allowedSymbols, 'g');
    }

    return allowedSymbols;
};

export const getCodeValue = (codeLength: number, value: string): Array<string> => {
    if (!value.length) {
        return new Array(codeLength).fill('');
    }

    return value.slice(0, codeLength).split('');
};

export const getPlaceholderValue = (codeLength: number, placeholder?: string): null | string[] => {
    if (!placeholder || typeof placeholder !== 'string') {
        return null;
    }

    if (placeholder.length === 1) {
        return Array(codeLength).fill(placeholder);
    }

    return placeholder.slice(0, codeLength).split('');
};
