import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../engines';
import { buttonConfig } from '../Button';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css`
    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    font-style: var(--plasma-typo-body-xs-font-style);
    font-weight: var(--plasma-typo-body-xs-font-weight);
    letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
    line-height: var(--plasma-typo-body-xs-line-height);
`;

export const Toast = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5625rem 0.75rem;
    border-radius: 0.75rem;
    max-width: calc(100vw - 5rem);
`;

export const CloseIconWrapper = styled(Button)`
    height: 1rem;
    --plasma_private-close-icon-margin: -0.0625rem -0.25rem -0.0625rem 0.5rem;
    margin: var(--plasma_private-close-icon-margin);

    color: var(--text-secondary);

    :hover {
        color: var(--text-secondary);
    }
`;
