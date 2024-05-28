// import { css } from '@salutejs/plasma-new-hope';
// TODO: move ViewContainer to plasma-new-hope
import styled, { css } from 'styled-components';
import React from 'react';

// TODO: КАК импортировать токены например фона ?? сс @neretin-trike
// import {} from '@salutejs/plasma-tokens';

const backgroundPrimary = '--background-primary';
const textPrimary = '--text-primary';

// TODO: Почему они без on-dark а просто dark ???
// const onDarkBackgroundPrimary = '--dark-background-primary';
// const onLightBackgroundPrimary = '--light-background-primary';

interface ViewContainerProps {
    view: 'default' | 'onDark' | 'onLight' | 'inverse';
}

const applyView = {
    default: css`
        /* TODO: нужен ли дефолт? */
    `,

    onDark: css`
        ${backgroundPrimary}: var(--dark-background-primary);

        --text-primary-hover: var(--on-dark-text-primary-hover);
        --text-primary-active: var(--on-dark-text-primary-active);
        --text-primary: var(--on-dark-text-primary);
        --text-secondary-hover: var(--on-dark-text-secondary-hover);
        --text-secondary-active: var(--on-dark-text-secondary-active);
        --text-secondary: var(--on-dark-text-secondary);
        --text-tertiary-hover: var(--on-dark-text-tertiary-hover);
        --text-tertiary-active: var(--on-dark-text-tertiary-active);
        --text-tertiary: var(--on-dark-text-tertiary);
        --text-paragraph-hover: var(--on-dark-text-paragraph-hover);
        --text-paragraph-active: var(--on-dark-text-paragraph-active);
        --text-paragraph: var(--on-dark-text-paragraph);
        --text-accent-hover: var(--on-dark-text-accent-hover);
        --text-accent-active: var(--on-dark-text-accent-active);
        --text-accent: var(--on-dark-text-accent);
        --text-accent-gradient-hover: var(--on-dark-text-accent-gradient-hover);
        --text-accent-gradient-active: var(--on-dark-text-accent-gradient-active);
        --text-accent-gradient: var(--on-dark-text-accent-gradient);
        --text-positive-hover: var(--on-dark-text-positive-hover);
        --text-positive-active: var(--on-dark-text-positive-active);
        --text-positive: var(--on-dark-text-positive);
        --text-warning-hover: var(--on-dark-text-warning-hover);
        --text-warning-active: var(--on-dark-text-warning-active);
        --text-warning: var(--on-dark-text-warning);
        --text-negative-hover: var(--on-dark-text-negative-hover);
        --text-negative-active: var(--on-dark-text-negative-active);
        --text-negative: var(--on-dark-text-negative);

        --surface-solid-primary-hover: var(--on-dark-surface-solid-primary-hover);
        --surface-solid-primary-active: var(--on-dark-surface-solid-primary-active);
        --surface-solid-primary: var(--on-dark-surface-solid-primary);
        --surface-solid-secondary-hover: var(--on-dark-surface-solid-secondary-hover);
        --surface-solid-secondary-active: var(--on-dark-surface-solid-secondary-active);
        --surface-solid-secondary: var(--on-dark-surface-solid-secondary);
        --surface-solid-tertiary-hover: var(--on-dark-surface-solid-tertiary-hover);
        --surface-solid-tertiary-active: var(--on-dark-surface-solid-tertiary-active);
        --surface-solid-tertiary: var(--on-dark-surface-solid-tertiary);
        --surface-solid-card-hover: var(--on-dark-surface-solid-card-hover);
        --surface-solid-card-active: var(--on-dark-surface-solid-card-active);
        --surface-solid-card: var(--on-dark-surface-solid-card);
        --surface-solid-default-hover: var(--on-dark-surface-solid-default-hover);
        --surface-solid-default-active: var(--on-dark-surface-solid-default-active);
        --surface-solid-default: var(--on-dark-surface-solid-default);
        --surface-transparent-primary-hover: var(--on-dark-surface-transparent-primary-hover);
        --surface-transparent-primary-active: var(--on-dark-surface-transparent-primary-active);
        --surface-transparent-primary: var(--on-dark-surface-transparent-primary);
        --surface-transparent-secondary-hover: var(--on-dark-surface-transparent-secondary-hover);
        --surface-transparent-secondary-active: var(--on-dark-surface-transparent-secondary-active);
        --surface-transparent-secondary: var(--on-dark-surface-transparent-secondary);
        --surface-transparent-tertiary-hover: var(--on-dark-surface-transparent-tertiary-hover);
        --surface-transparent-tertiary-active: var(--on-dark-surface-transparent-tertiary-active);
        --surface-transparent-tertiary: var(--on-dark-surface-transparent-tertiary);
        --surface-transparent-deep-hover: var(--on-dark-surface-transparent-deep-hover);
        --surface-transparent-deep-active: var(--on-dark-surface-transparent-deep-active);
        --surface-transparent-deep: var(--on-dark-surface-transparent-deep);
        --surface-transparent-card-hover: var(--on-dark-surface-transparent-card-hover);
        --surface-transparent-card-active: var(--on-dark-surface-transparent-card-active);
        --surface-transparent-card: var(--on-dark-surface-transparent-card);
        --surface-accent-hover: var(--on-dark-surface-accent-hover);
        --surface-accent-active: var(--on-dark-surface-accent-active);
        --surface-accent: var(--on-dark-surface-accent);
        --surface-accent-gradient-hover: var(--on-dark-surface-accent-gradient-hover);
        --surface-accent-gradient-active: var(--on-dark-surface-accent-gradient-active);
        --surface-accent-gradient: var(--on-dark-surface-accent-gradient);
        --surface-positive-hover: var(--on-dark-surface-positive-hover);
        --surface-positive-active: var(--on-dark-surface-positive-active);
        --surface-positive: var(--on-dark-surface-positive);
        --surface-warning-hover: var(--on-dark-surface-warning-hover);
        --surface-warning-active: var(--on-dark-surface-warning-active);
        --surface-warning: var(--on-dark-surface-warning);
        --surface-negative-hover: var(--on-dark-surface-negative-hover);
        --surface-negative-active: var(--on-dark-surface-negative-active);
        --surface-negative: var(--on-dark-surface-negative);

        --text-primary-hover: var(--inverse-text-primary-hover);
        --text-primary-active: var(--inverse-text-primary-active);
        --text-primary: var(--inverse-text-primary);
        --text-secondary-hover: var(--inverse-text-secondary-hover);
        --text-secondary-active: var(--inverse-text-secondary-active);
        --text-secondary: var(--inverse-text-secondary);
        --text-tertiary-hover: var(--inverse-text-tertiary-hover);
        --text-tertiary-active: var(--inverse-text-tertiary-active);
        --text-tertiary: var(--inverse-text-tertiary);
        --text-paragraph-hover: var(--inverse-text-paragraph-hover);
        --text-paragraph-active: var(--inverse-text-paragraph-active);
        --text-paragraph: var(--inverse-text-paragraph);

        /* TODO: Вот это будет работать только если inverse / ondark / onlight / default имеют соотвтетствие */

        --inverse-text-primary-hover: var(--on-light-text-primary-hover);
        --inverse-text-primary-active: var(--on-light-text-primary-active);
        --inverse-text-primary: var(--on-light-text-primary);
        --inverse-text-secondary-hover: var(--on-light-text-secondary-hover);
        --inverse-text-secondary-active: var(--on-light-text-secondary-active);
        --inverse-text-secondary: var(--on-light-text-secondary);
        --inverse-text-tertiary-hover: var(--on-light-text-tertiary-hover);
        --inverse-text-tertiary-active: var(--on-light-text-tertiary-active);
        --inverse-text-tertiary: var(--on-light-text-tertiary);
        --inverse-text-paragraph-hover: var(--on-light-text-paragraph-hover);
        --inverse-text-paragraph-active: var(--on-light-text-paragraph-active);
        --inverse-text-paragraph: var(--on-light-text-paragraph);
    `,
    onLight: css`
        ${backgroundPrimary}: var(--light-background-primary);
        --text-primary-hover: var(--on-light-text-primary-hover);
        --text-primary-active: var(--on-light-text-primary-active);
        --text-primary: var(--on-light-text-primary);
        --text-secondary-hover: var(--on-light-text-secondary-hover);
        --text-secondary-active: var(--on-light-text-secondary-active);
        --text-secondary: var(--on-light-text-secondary);
        --text-tertiary-hover: var(--on-light-text-tertiary-hover);
        --text-tertiary-active: var(--on-light-text-tertiary-active);
        --text-tertiary: var(--on-light-text-tertiary);
        --text-paragraph-hover: var(--on-light-text-paragraph-hover);
        --text-paragraph-active: var(--on-light-text-paragraph-active);
        --text-paragraph: var(--on-light-text-paragraph);
        --text-accent-hover: var(--on-light-text-accent-hover);
        --text-accent-active: var(--on-light-text-accent-active);
        --text-accent: var(--on-light-text-accent);
        --text-accent-gradient-hover: var(--on-light-text-accent-gradient-hover);
        --text-accent-gradient-active: var(--on-light-text-accent-gradient-active);
        --text-accent-gradient: var(--on-light-text-accent-gradient);
        --text-positive-hover: var(--on-light-text-positive-hover);
        --text-positive-active: var(--on-light-text-positive-active);
        --text-positive: var(--on-light-text-positive);
        --text-warning-hover: var(--on-light-text-warning-hover);
        --text-warning-active: var(--on-light-text-warning-active);
        --text-warning: var(--on-light-text-warning);
        --text-negative-hover: var(--on-light-text-negative-hover);
        --text-negative-active: var(--on-light-text-negative-active);
        --text-negative: var(--on-light-text-negative);

        --surface-solid-primary-hover: var(--on-light-surface-solid-primary-hover);
        --surface-solid-primary-active: var(--on-light-surface-solid-primary-active);
        --surface-solid-primary: var(--on-light-surface-solid-primary);
        --surface-solid-secondary-hover: var(--on-light-surface-solid-secondary-hover);
        --surface-solid-secondary-active: var(--on-light-surface-solid-secondary-active);
        --surface-solid-secondary: var(--on-light-surface-solid-secondary);
        --surface-solid-tertiary-hover: var(--on-light-surface-solid-tertiary-hover);
        --surface-solid-tertiary-active: var(--on-light-surface-solid-tertiary-active);
        --surface-solid-tertiary: var(--on-light-surface-solid-tertiary);
        --surface-solid-card-hover: var(--on-light-surface-solid-card-hover);
        --surface-solid-card-active: var(--on-light-surface-solid-card-active);
        --surface-solid-card: var(--on-light-surface-solid-card);
        --surface-solid-default-hover: var(--on-light-surface-solid-default-hover);
        --surface-solid-default-active: var(--on-light-surface-solid-default-active);
        --surface-solid-default: var(--on-light-surface-solid-default);
        --surface-transparent-primary-hover: var(--on-light-surface-transparent-primary-hover);
        --surface-transparent-primary-active: var(--on-light-surface-transparent-primary-active);
        --surface-transparent-primary: var(--on-light-surface-transparent-primary);
        --surface-transparent-secondary-hover: var(--on-light-surface-transparent-secondary-hover);
        --surface-transparent-secondary-active: var(--on-light-surface-transparent-secondary-active);
        --surface-transparent-secondary: var(--on-light-surface-transparent-secondary);
        --surface-transparent-tertiary-hover: var(--on-light-surface-transparent-tertiary-hover);
        --surface-transparent-tertiary-active: var(--on-light-surface-transparent-tertiary-active);
        --surface-transparent-tertiary: var(--on-light-surface-transparent-tertiary);
        --surface-transparent-deep-hover: var(--on-light-surface-transparent-deep-hover);
        --surface-transparent-deep-active: var(--on-light-surface-transparent-deep-active);
        --surface-transparent-deep: var(--on-light-surface-transparent-deep);
        --surface-transparent-card-hover: var(--on-light-surface-transparent-card-hover);
        --surface-transparent-card-active: var(--on-light-surface-transparent-card-active);
        --surface-transparent-card: var(--on-light-surface-transparent-card);
        --surface-accent-hover: var(--on-light-surface-accent-hover);
        --surface-accent-active: var(--on-light-surface-accent-active);
        --surface-accent: var(--on-light-surface-accent);
        --surface-accent-gradient-hover: var(--on-light-surface-accent-gradient-hover);
        --surface-accent-gradient-active: var(--on-light-surface-accent-gradient-active);
        --surface-accent-gradient: var(--on-light-surface-accent-gradient);
        --surface-positive-hover: var(--on-light-surface-positive-hover);
        --surface-positive-active: var(--on-light-surface-positive-active);
        --surface-positive: var(--on-light-surface-positive);
        --surface-warning-hover: var(--on-light-surface-warning-hover);
        --surface-warning-active: var(--on-light-surface-warning-active);
        --surface-warning: var(--on-light-surface-warning);
        --surface-negative-hover: var(--on-light-surface-negative-hover);
        --surface-negative-active: var(--on-light-surface-negative-active);
        --surface-negative: var(--on-light-surface-negative);

        /* TODO: Вот это будет работать только если inverse / ondark / onlight / default имеют соотвтетствие */

        --inverse-text-primary-hover: var(--on-dark-text-primary-hover);
        --inverse-text-primary-active: var(--on-dark-text-primary-active);
        --inverse-text-primary: var(--on-dark-text-primary);
        --inverse-text-secondary-hover: var(--on-dark-text-secondary-hover);
        --inverse-text-secondary-active: var(--on-dark-text-secondary-active);
        --inverse-text-secondary: var(--on-dark-text-secondary);
        --inverse-text-tertiary-hover: var(--on-dark-text-tertiary-hover);
        --inverse-text-tertiary-active: var(--on-dark-text-tertiary-active);
        --inverse-text-tertiary: var(--on-dark-text-tertiary);
        --inverse-text-paragraph-hover: var(--on-dark-text-paragraph-hover);
        --inverse-text-paragraph-active: var(--on-dark-text-paragraph-active);
        --inverse-text-paragraph: var(--on-dark-text-paragraph);
    `,
    inverse: css`
        /* А где токен inverse background ??  */
        ${backgroundPrimary}: var(--inverse-background-primary);
    `,
};

const Root = styled.div<ViewContainerProps>`
    background-color: var(${backgroundPrimary});
    color: var(${textPrimary});

    ${({ view }) => applyView[view]};
`;

export const ViewContainer: React.FC<React.PropsWithChildren<ViewContainerProps>> = ({ view, children }) => {
    // const className = applyView[view];

    return <Root view={view}>{children}</Root>;
};
