export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    view: {
        default: {
            trackColor: 'var(--surface-solid-primary)',
            thumbColor: 'var(--surface-solid-tertiary)',
            thumbHoverColor: 'var(--surface-solid-tertiary-hover)',
            thumbActiveColor: 'var(--surface-solid-tertiary-active)',
        },
    },
    size: {
        s: {
            scrollWidth: '0.125rem',
        },
        m: {
            scrollWidth: '0.25rem',
        },
    },
};
