import React, { useState } from 'react';
import styled from 'styled-components';
import { IconClose, IconHistory } from '@salutejs/plasma-icons';

const StyledButton = styled.button`
    all: unset;
    display: inline-block;
    width: 16px;
    height: 16px;

    color: rgba(255, 255, 255, 0.56);

    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

export const ButtonToggle = ({ onClick }: { onClick?: (state: boolean) => void }) => {
    const [state, setState] = useState(true);

    return (
        <StyledButton
            onClick={() => {
                setState(!state);
                onClick?.(state);
            }}
        >
            {state ? <IconHistory size="xs" color="inherit" /> : <IconClose size="xs" color="inherit" />}
        </StyledButton>
    );
};
