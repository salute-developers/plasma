import { css } from 'styled-components';

export const textFieldProps = {
    l: css`
        --height: 3.5rem;
        --padding-left: 1.125rem;
        --padding-right: 1rem;

        --padding-default: 1.063rem var(--padding-right) 1.063rem var(--padding-left);

        --padding-placeholder-inactive: 0.563rem var(--padding-right) 0.563rem var(--padding-left);

        --padding-input-not-placeholder-shown: 1.563rem var(--padding-right) 0.563rem var(--padding-left);

        --padding-content-left: 3rem;
        --padding-content-right: 3.25rem;

        --margin-x-field-content: 1rem;

        --font-size: 1.125rem;
        --line-height: 1.375rem;

        --border-radius: 0.875rem;

        --placeholder-active-font-size: 0.75rem;
        --placeholder-active-line-height: 0.875rem;

        --label-margin-bottom: 0.75rem;
    `,
    m: css`
        --height: 3rem;

        --padding-left: 1rem;
        --padding-right: 0.875rem;

        --padding-default: 0.875rem var(--padding-right) 0.875rem var(--padding-left);

        --padding-placeholder-inactive: 0.375rem var(--padding-right) 0 var(--padding-left);

        --padding-input-not-placeholder-shown: 1.375rem var(--padding-right) 0.375rem var(--padding-left);

        --padding-content-left: 2.75rem;
        --padding-content-right: 3.125rem;

        --margin-x-field-content: 0.875rem;

        --border-radius: 0.75rem;

        --font-size: 1rem;
        --line-height: 1.25rem;

        --placeholder-active-font-size: 0.75rem;
        --placeholder-active-line-height: 0.875rem;

        --label-margin-bottom: 0.625rem;
    `,
    s: css`
        --height: 2.5rem;

        --padding-left: 0.875rem;
        --padding-right: 0.75rem;

        --padding-default: 0.688rem var(--padding-right) 0.688rem var(--padding-left);

        --padding-placeholder-inactive: 0.313rem var(--padding-right) 0 var(--padding-left);

        --padding-input-not-placeholder-shown: 1.063rem var(--padding-right) 0.313rem var(--padding-left);

        --padding-content-left: 2.5rem;
        --padding-content-right: 3rem;

        --margin-x-field-content: 0.75rem;

        --border-radius: 0.625rem;

        --font-size: 0.875rem;
        --line-height: 1.125rem;

        --placeholder-active-font-size: 0.625rem;
        --placeholder-active-line-height: 0.75rem;

        --label-margin-bottom: 0.5rem;
    `,
    xs: css`
        --height: 2rem;

        --padding-left: 0.625rem;
        --padding-right: 0.5rem;

        --padding-default: 0.563rem var(--padding-right) 0.563rem var(--padding-left);

        --padding-placeholder-inactive: var(--padding-default);

        --padding-input-not-placeholder-shown: var(--padding-default);

        --padding-content-left: 1.75rem;
        --padding-content-right: 2.25rem;

        --margin-x-field-content: 0.5rem;

        --border-radius: 0.5rem;

        --font-size: 0.75rem;
        --line-height: 0.875rem;

        --placeholder-active-font-size: 0.625rem;
        --placeholder-active-line-height: 0.75rem;

        --field-content-size: 1rem;

        --label-margin-bottom: 0.375rem;
    `,
};
