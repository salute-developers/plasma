export const classes = {
    autoStretching: 'group-stretching-auto',
    filledStretching: 'group-stretching-filled',

    horizontal: 'group-orientation-horizontal',
    vertical: 'group-orientation-vertical',

    none: 'group-gap-none',
    dense: 'group-gap-dense',
    wide: 'group-gap-wide',

    segmented: 'group-shape-segmented',
    default: 'group-shape-default',
};

export const privateTokens = {
    innerRadius: '--sdds-core_private-group-inner-radius',
};

export const tokens = {
    /** @styleType value */
    orientation: '--sdds-core-group-orientation',
    /** @styleType dimension */
    gap: '--sdds-core-group-gap',
    /** @styleType dimension */
    segmentedRadius: '--sdds-core-group-segmented-radius',
};
