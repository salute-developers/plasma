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
