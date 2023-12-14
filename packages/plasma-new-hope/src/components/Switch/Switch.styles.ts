import { styled } from '@linaria/react';

import { applyEllipsis } from '../../mixins';

export const StyledInput = styled.input`
    position: absolute;
    right: 0;
    margin: 0;
    opacity: 0;

    &:focus {
        outline: 0 none;
    }
`;

export const StyledLabel = styled.span`
    user-select: none;

    // TODO: multiline switch
    ${applyEllipsis()}
`;

export const StyledTrigger = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    transition: background-color 0.15s ease-in-out 0.1s;

    ::after {
        content: '';
        position: absolute;
        right: auto;
        left: 0;

        transition: width 0.15s ease-in-out 0s, left 0.3s ease-in-out 0s, right 0.3s ease-in-out 0s;
    }

    ${StyledInput}:checked ~ &::after {
        right: 0;
        left: auto;
    }
`;
