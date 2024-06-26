import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft } from '@salutejs/plasma-icons';

const HeaderWrapper  = styled.div`
    display: flex;
    top: 2rem;
    left: 1.5rem;
    gap: 1.5rem;
    position: fixed;
    align-items: center;
    z-index: 100;
    cursor: pointer;
    opacity: 0.8;
    z-index: 99999;

    &:hover{ 
        opacity: 1;
    }
`;

const Text = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
`;

export const Header:React.FC<{text?: string, onClose?: () => void}> = ({text, onClose}) => {
    return (
        <HeaderWrapper onClick={() => onClose?.()}>
            <IconArrowLeft size='xs' />
            <Text>{text}</Text>
        </HeaderWrapper>
    );
}