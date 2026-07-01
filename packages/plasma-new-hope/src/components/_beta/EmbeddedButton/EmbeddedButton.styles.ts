import styled, { css } from 'styled-components';
import { addFocus } from 'src/mixins';
import { component, mergeConfig } from 'src/engines';

import { spinnerConfig, spinnerTokens } from '../../Spinner';

import type { IconPosition } from './EmbeddedButton.types';
import { tokens } from './EmbeddedButton.tokens';

const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

const positionAlignItems: Record<IconPosition, string> = {
    center: 'center',
    'center-left': 'center',
    'center-right': 'center',
    top: 'start',
    'top-left': 'start',
    'top-right': 'start',
    bottom: 'end',
    'bottom-left': 'end',
    'bottom-right': 'end',
};

const positionJustifyItems: Record<IconPosition, string> = {
    center: 'center',
    'center-left': 'start',
    'center-right': 'end',
    top: 'center',
    'top-left': 'start',
    'top-right': 'end',
    bottom: 'center',
    'bottom-left': 'start',
    'bottom-right': 'end',
};

export const LoadWrap = styled.div<{ position: IconPosition; isLoading?: boolean }>`
    opacity: ${({ isLoading }) => (isLoading ? `var(${tokens.loadingIconOpacity})` : '1')};
    display: grid;
    width: 100%;
    height: 100%;
    align-items: ${({ position }) => positionAlignItems[position]};
    justify-items: ${({ position }) => positionJustifyItems[position]};
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

export const Loader = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.size}: var(${tokens.spinnerSize});
    ${spinnerTokens.color}: var(${tokens.spinnerColor});
`;

export const base = css`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: transparent;
    padding: 0;

    a& {
        text-decoration: none;
    }

    :focus-visible {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: '0.0625rem',
        outlineRadius: `var(${tokens.borderRadius})`,
        outlineColor: `var(${tokens.focusColor})`,
    })}
`;
