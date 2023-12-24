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
// eslint-disable-next-line no-underscore-dangle
export const _tokenBorderColor = '--plasma_private-textfield-border-color';
// eslint-disable-next-line no-underscore-dangle
export const _tokenBorderWidth = '--plasma_private-textfield-border-width';
export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    box-shadow: inset 0 0 0 var(${_tokenBorderWidth}) var(${_tokenBorderColor});

    ${InputLabelWrapper} {
        flex-grow: 1;
    }
`;

export const Label = styled.div``;

export const LeftHelper = styled.div``;
