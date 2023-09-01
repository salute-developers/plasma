import React, { useCallback } from 'react';
import styled from 'styled-components';

import { IconArrowLeft } from '../../icons';

const Root = styled.div`
    cursor: pointer;
    position: absolute;
    left: 1.5rem;

    opacity: 0.56;

    &:hover {
        opacity: 1;
    }
`;

interface BackwardButtonProps {
    onBackwardClick: () => void;
}

export const BackwardButton = ({ onBackwardClick }: BackwardButtonProps) => {
    const onBackwardHandleClick = useCallback(() => {
        onBackwardClick();
    }, [onBackwardClick]);

    return (
        <Root onClick={onBackwardHandleClick}>
            <IconArrowLeft />
        </Root>
    );
};
