export const appearances = ['default', 'clear'];
export const labelPlacements = ['outer', 'inner'];
export const requiredPlacements = ['left', 'right'];
export const inputViews = ['default', 'positive', 'negative'];
export const dividers = ['none', 'dash', 'icon'];
export const formats = ['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM'];
export const eventTooltipSizes = ['m', 's'];
export const hintViews = ['default'];
export const hintSizes = ['m', 's'];
export const hintTriggers = ['hover', 'click'];
export const hintTargetPlacements = ['outer', 'inner'];
export const placements = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];
export const shortcutsPlacements = ['left', 'right'];

export const dateShortcuts = [
    {
        value: new Date(2024, 11, 14),
        label: 'Дата по умолчанию',
    },
    {
        value: new Date(2024, 11, 4),
        label: '10 дней до даты по умолчанию',
    },
    {
        value: new Date(2024, 11, 24),
        label: '10 дней после даты по умолчанию',
    },
];

export const dateShortcutsRange = [
    {
        value: [new Date(2024, 11, 14), new Date(2024, 11, 23)],
        label: 'Промежуток в 10 дней',
    },
    {
        value: [new Date(2024, 11, 1), new Date(2024, 11, 20)],
        label: 'Промежуток в 20 дней',
    },
    {
        value: [new Date(2024, 11, 5), undefined],
        label: 'Промежуток без конечой даты',
    },
];
