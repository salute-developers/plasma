import styled from 'styled-components';

import { addFocus } from '../../mixins';

export const ButtonBase = styled.button`
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    box-sizing: border-box;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 0.25rem;
    &:disabled {
        background-color: transparent;
    }
    &:focus {
        outline: none;
    }
    ${addFocus({
        outlineRadius: 'inherit',
    })}
`;
