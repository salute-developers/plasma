import React from 'react';
import styled from 'styled-components';

import { textPrimary } from '@salutejs/plasma-tokens-b2c/new';

const HeaderArrow = styled.div`
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.56;
`;

const HeaderWrapper = styled.div`
    display: flex;

    top: 1.875rem;
    left: 1rem;
    gap: 1.125rem;

    position: fixed;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
    z-index: 999;

    color: ${textPrimary};

    &:hover ${HeaderArrow} {
        opacity: 1;
    }
`;

const HeaderTextBold = styled.div`
    font-size: var(--plasma-typo-body-m-font-size);
    line-height: var(--plasma-typo-body-m-line-height);
    font-weight: var(--plasma-typo-body-m-bold-font-weight);
`;

interface HeaderProps {
    text?: string;
    onClick?: () => void;
}

export const Header = ({ text, onClick, ...rest }: HeaderProps) => {
    return (
        <HeaderWrapper onClick={onClick} {...rest}>
            <HeaderArrow>
                <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.56 4.64C2.22933 4.24533 1.88267 3.904 1.52 3.616C1.168 3.31733 0.794667 3.072 0.4 2.88V2.192C1.18933 1.78667 1.90933 1.19467 2.56 0.415999H3.792C3.67467 0.725333 3.536 1.01867 3.376 1.296C3.22667 1.56267 3.06667 1.81867 2.896 2.064V3.008C3.06667 3.232 3.22667 3.48267 3.376 3.76C3.536 4.02667 3.67467 4.32 3.792 4.64H2.56ZM2.8 3.184L2.816 1.872H11.6V3.184H2.8Z"
                        fill="currentColor"
                    />
                </svg>
            </HeaderArrow>
            <HeaderTextBold>{text}</HeaderTextBold>
        </HeaderWrapper>
    );
};
