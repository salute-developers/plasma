export const labelPlacements = ['outer', 'inner'];
export const requiredPlacements = ['left', 'right'];
export const shortcutsPlacements = ['left', 'right'];
export const dateFormats = ['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM'];
export const timeFormats = ['HH:mm:ss', 'HH:mm', 'mm:ss', 'HH'];

export const dateShortcuts = [
    {
        value: new Date(2024, 11, 14),
        label: 'Дата по умолчанию',
    },
    {
        value: new Date(2024, 1, 1, 12, 12, 12),
        label: 'Минимальная дата',
    },
    {
        value: new Date(2024, 11, 29),
        label: 'Максимальная дата',
    },
];
