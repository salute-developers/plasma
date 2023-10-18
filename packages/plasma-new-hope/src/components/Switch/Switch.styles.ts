import { styled } from '@linaria/react';

import { tokens, classes } from './Switch.tokens';

const { styledTriggerClass } = classes;

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
    font-size: var(${tokens.fontSize});
`;

export const StyledContentWrapper = styled.label<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    cursor: inherit;

    &:active:not([disabled]) .${styledTriggerClass}::after {
        width: var(${tokens.switchTriggerHeight});
    }
`;

export const StyledTrigger = styled.div`
    ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto var(${tokens.switchEllipseMargin});
        background-color: var(${tokens.switchEllipseBackground});
        transition: width 0.15s ease-in-out 0s, left 0.3s ease-in-out 0s, right 0.3s ease-in-out 0s;
        box-shadow: var(${tokens.switchEllipseBoxShadow});
    }
`;
