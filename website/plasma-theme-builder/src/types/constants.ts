export const baseColors = {
    white: {
        value: '#FFFFFF',
        comment: 'Базовый белый цвет',
    },
    black: {
        value: '#000000',
        comment: 'Базовый черный цвет',
    },
    clear: {
        value: 'rgba(0, 0, 0, 0)',
        comment: 'Базовый прозрачный цвет',
    },
};

// TODO: использовать палитру когда будет добавлена колонка 50
export const generalColorsAdditionalSaturation = {
    coolGray: {
        50: '#F7F8FA',
    },
    gray: {
        50: '#F7F7F7',
    },
};

export const emptyInputData = {
    section: {
        value: '',
        status: undefined,
    },
    subsection: {
        value: '',
        status: undefined,
    },
    name: {
        value: '',
        status: undefined,
    },
    value: {
        value: '',
        status: undefined,
    },
    comment: undefined,
};

export const zeroPoint = {
    x: 0,
    y: 0,
};

export const enum Steps {
    INIT = 0,
    GET_DEFAULT_BRANCH = 1,
    CREATE_BRANCH = 2,
    LATEST_COMMIT = 3,
    CREATE_FILES_BLOB = 4,
    CREATE_FILES_TREE = 5,
    CREATE_COMMIT = 6,
    SET_COMMIT_TO_BRANCH = 7,
    CREATE_PULL_REQUEST = 8,
    READ_PULL_REQUEST = 9,
    DONE = 10,
}
