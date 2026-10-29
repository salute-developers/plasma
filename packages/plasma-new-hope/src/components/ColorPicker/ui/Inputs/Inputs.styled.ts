import styled from 'styled-components';

import { tokens } from '../../ColorPicker.tokens';

export const InputsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const InputWrapper = styled.div<{
    $hasIcon?: boolean;
}>`
    position: relative;
    width: 100%;
    color: #6f6f6f;
    box-sizing: border-box;
    background-color: var(${tokens.inputBackgroundColor}, #f3f3f3);
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding-inline: 0.5rem;

    input {
        box-sizing: border-box;
        padding: 0;
        width: 100%;
        height: 2rem;
        border-radius: 0.5rem;
        font-family: 'SB Sans Text', sans-serif;
        font-weight: 400;
        text-align: ${(props) => (props.$hasIcon ? 'left' : 'center')};
        font-size: 0.75rem;
        border: none;
        outline: none;
        color: currentColor;
        background-color: transparent;
    }

    div:has(svg) + input {
        margin-left: 0.25rem;
    }
`;
