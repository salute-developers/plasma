import styled from 'styled-components';

import { tokens } from '../../../ColorPicker.tokens';

export const InputTypeTabsRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 32px;
    background-color: var(${tokens.inputTypeTabBackgroundColor}, #e6e6e6);
    border-radius: 62.5rem;
`;

export const InputTypeTabControl = styled.button<{ $active?: boolean }>`
    all: unset;
    appearance: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: stretch;
    max-height: 2rem;
    text-align: center;
    font-size: 0.75rem;

    background-color: ${(props) =>
        props.$active
            ? `var(${tokens.activeTabColor}, var(--plasma-button-background-color))`
            : 'var(--plasma-button-background-color)'};

    color: ${(props) =>
        props.$active
            ? `var(${tokens.activeTabTextColor}, var(--plasma-button-background-color))`
            : `var(${tokens.buttonColor}), #6a6a6a`};

    :first-child {
        border-top-left-radius: 62.5rem;
        border-bottom-left-radius: 62.5rem;
    }

    :last-child {
        border-top-right-radius: 62.5rem;
        border-bottom-right-radius: 62.5rem;
    }
`;
