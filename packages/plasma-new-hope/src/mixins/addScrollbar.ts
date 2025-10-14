export const scrollbarLarge = () => `
    &::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--surface-transparent-primary);
        border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--surface-transparent-tertiary);
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--surface-transparent-tertiary-hover);
        }

        &:active {
            background-color: var(--surface-transparent-tertiary-active);
        }
    }

    /* scrollbar-width: thin;
    scrollbar-color: var(--surface-transparent-tertiary) var(--surface-transparent-primary); */
`;

export const scrollbarSmall = () => `
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
        width: 0.125rem;
        height: 0.125rem;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--surface-transparent-primary);
        border-radius: 0.125rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--surface-transparent-tertiary);
        border-radius: 0.125rem;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--surface-transparent-tertiary-hover);
        }

        &:active {
            background-color: var(--surface-transparent-tertiary-active);
        }
    }

    /* scrollbar-width: thin;
    scrollbar-color: var(--surface-transparent-tertiary) var(--surface-transparent-primary); */
`;

export const scrollbarTest = () => `
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: var(--surface-transparent-primary);
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 5px;
        transition: background 0.3s ease;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: var(--surface-transparent-tertiary);
    }

    scrollbar-width: thin;
    scrollbar-color: transparent var(--surface-transparent-primary);
    transition: scrollbar-color 0.3s ease;
    

    &:hover {
        scrollbar-color: var(--surface-transparent-tertiary); var(--surface-transparent-primary);
    }
`;
