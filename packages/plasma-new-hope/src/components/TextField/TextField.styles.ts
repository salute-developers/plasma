import { styled } from '@linaria/react';

export const Input = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
`;

export const InputLabelWrapper = styled.div`
    ${Input} {
        width: 100%;
    }
`;

// NOTE: border-width is used in size border-color is used in view
export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    box-shadow: inset 0 0 0 var(--plasma_private-textfield-border-width) var(--plasma_private-textfield-border-color);

    ${InputLabelWrapper} {
        flex-grow: 1;
    }
`;

export const Label = styled.div``;

export const LeftHelper = styled.div``;
