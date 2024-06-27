import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft } from '@salutejs/plasma-icons';

const Text = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    opacity: 0.7;
`;

const HeaderWrapper  = styled.div`
    display: flex;
    top: 2rem;
    left: 1.625rem;
    gap: 1.75rem;
    position: fixed;
    align-items: center;
    z-index: 100;
    cursor: pointer;
    z-index: 99999;

    &:hover .hoverHeader{ 
        opacity: 1;
    }
`;

const TextBold = styled(Text)`
    font-weight: 700;
    opacity: 1;
`;

export const Header:React.FC<{text?: string, onClose?: () => void}> = ({text, onClose}) => {
    return (
        <HeaderWrapper onClick={() => onClose?.()}>
            <Text className='hoverHeader'>←</Text>
            <TextBold>{text}</TextBold>
        </HeaderWrapper>
    );
}