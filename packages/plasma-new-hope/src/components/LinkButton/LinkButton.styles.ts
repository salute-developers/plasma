import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyEllipsis, addFocus } from '../../mixins';
import { component, mergeConfig } from '../../engines';
import { spinnerConfig, spinnerTokens } from '../Spinner';

import { tokens } from './LinkButton.tokens';

const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    text-decoration: none;
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    ${addFocus({
        outlineOffset: '-0.125rem',
        outlineSize: '0.063rem',
        outlineRadius: `calc(0.125rem + var(${tokens.linkButtonRadius}))`,
        outlineColor: `var(${tokens.linkButtonFocusColor})`,
    })}
`;

export const LoadWrap = styled.div<{ isLoading?: boolean }>`
    opacity: ${({ isLoading }) => (isLoading ? '0.06' : '1')};
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    height: 100%;
    width: 100%;
`;

export const Loader = styled.div`
    position: absolute;
`;

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.size}: var(${tokens.linkButtonSpinnerSize});
    ${spinnerTokens.color}: var(${tokens.linkButtonSpinnerColor});
`;

export const LinkButtonText = styled.span`
    padding: var(${tokens.linkButtonTextPadding});
    color: var(${tokens.linkButtonTextColor});

    ${applyEllipsis()}
`;

export const StyledContentLeft = styled.div`
    line-height: 0;
    color: var(${tokens.linkButtonIconColor});

    margin: var(${tokens.linkButtonLeftContentMargin});
`;

export const StyledContentRight = styled.div`
    line-height: 0;
    color: var(${tokens.linkButtonIconColor});

    margin: var(${tokens.linkButtonRightContentMargin});
`;
