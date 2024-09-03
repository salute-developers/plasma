export const charType = {
    User: 1,
    Char: 2,
    Mask: 3,
} as const;

export const keyboardCode = {
    Backspace: 'Backspace',
    Delete: 'Delete',
};

export const escapeChar = '\\';

export const defaultFormatChars = [
    {
        str: '0',
        regexp: /[0-9]/,
    },
    {
        str: '*',
        regexp: /./,
    },
    {
        str: 'a',
        regexp: /[a-zA-Z]/,
    },
    {
        str: 'я',
        regexp: /[а-яА-ЯёЁ]/,
    },
];
