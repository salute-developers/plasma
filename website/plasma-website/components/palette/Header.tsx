import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.a`
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

    &:hover .hoverHeader {
        opacity: 1;
    }
`;

const HeaderText = styled.div`
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    opacity: 0.7;
`;
const HeaderTextBold = styled(HeaderText)`
    font-weight: var(--plasma-typo-headline1-font-weight);
    opacity: 1;
`;

export const Header: React.FC<{ text?: string; link?: string }> = ({ text, link }) => {
    return (
        <HeaderWrapper href={link}>
            <HeaderText className="hoverHeader">←</HeaderText>
            <HeaderTextBold>{text}</HeaderTextBold>
        </HeaderWrapper>
    );
};
