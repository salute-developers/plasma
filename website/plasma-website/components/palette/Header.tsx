import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.a<{ dark?: boolean }>`
    display: flex;
    top: 2rem;
    left: 1.625rem;
    gap: 1.75rem;
    position: fixed;
    align-items: center;
    cursor: pointer;
    z-index: 99999;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;

    @media (max-width: 768px) {
        color: ${({ dark }) => (dark ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)')};
    }

    &:hover .hoverHeader {
        opacity: 1;
    }
`;

const HeaderText = styled.div<{ dark?: boolean }>`
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    opacity: 0.7;

    @media (max-width: 768px) {
        color: ${({ dark }) => (dark ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)')};
    }
`;
const HeaderTextBold = styled(HeaderText)`
    font-weight: var(--plasma-typo-headline1-font-weight);
    opacity: 1;
`;

export const Header: React.FC<{ text?: string; link?: string; dark?: boolean }> = ({ text, link, dark }) => {
    return (
        <HeaderWrapper href={link} dark={dark}>
            <HeaderText className="hoverHeader" dark={dark}>
                ←
            </HeaderText>
            <HeaderTextBold dark={dark}>{text}</HeaderTextBold>
        </HeaderWrapper>
    );
};
