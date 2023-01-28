import { css } from 'styled-components';

export const textAreaProps = {
    l: css`
        --top: 1.188rem;
        --right: 1.125rem;

        --padding-x: 1.125rem;
        --padding-right: 3.625rem;

        --padding-bottom: 0.75rem;
        --padding-bottom-override: 2.375rem;

        --padding: 1.063rem var(--padding-x) var(--padding-bottom) var(--padding-x);

        --border-radius: 0.875rem;

        --font-size: 1.125rem;
        --line-height: 1.375rem;

        --min-height: 3.5rem;
    `,
    m: css`
        --top: 1rem;
        --right: 1rem;

        --padding-x: 1rem;
        --padding-right: 3.375rem;

        --padding-bottom: 0.75rem;
        --padding-bottom-override: 2.375rem;

        --padding: 0.875rem var(--padding-x) var(--padding-bottom) var(--padding-x);

        --border-radius: 0.75rem;

        --font-size: 1rem;
        --line-height: 1.25rem;

        --min-height: 3rem;
    `,
    s: css`
        --top: 0.813rem;
        --right: 0.875rem;

        --padding-x: 0.875rem;
        --padding-right: 3.125rem;

        --padding-bottom: 0.75rem;
        --padding-bottom-override: 2.375rem;

        --padding: 0.688rem var(--padding-x) var(--padding-bottom) var(--padding-x);

        --border-radius: 0.625rem;

        --font-size: 0.875rem;
        --line-height: 1.125rem;

        --min-height: 2.5rem;
    `,
    xs: css`
        --top: 0.625rem;
        --right: 0.563rem;

        --padding-x: 0.625rem;
        --padding-right: 2.125rem;

        --padding-bottom: 0.563rem;
        --padding-bottom-override: 1.938rem;

        --padding: 0.563rem var(--padding-x) var(--padding-bottom) var(--padding-x);

        --border-radius: 0.5rem;

        --font-size: 0.75rem;
        --line-height: 0.875rem;

        --min-height: 2rem;
    `,
};
