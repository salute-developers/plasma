import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft, IconArrowUp } from '@salutejs/plasma-icons';
import { BodyS } from '@salutejs/plasma-b2c';

const StyledHeader = styled.header`
    position: fixed;
    top: 0.5rem;
    left: 8px;
    z-index: 1000;

    max-width: 1600px;
    width: calc(100% - 1rem);

    color: rgba(255, 255, 255, 0.56);
    border-radius: 2rem;

    backdrop-filter: blur(4rem);
`;

const StyledGrid = styled.div`
    --padding-x: 56px;
    --padding-y: 24px;

    display: grid;
    grid-template-columns: repeat(30, 26px);
    gap: 8px;
    align-items: center;

    margin-left: 2px;
    padding: var(--padding-y) var(--padding-x);
    min-height: 64px;

    line-height: 12px;
    box-sizing: border-box;

    &:has(.trigger:hover) .item:nth-child(1) {
        color: rgba(255, 255, 255, 1);
    }

    @media (min-width: 960px) and (max-width: 1199px) {
        grid-template-columns: repeat(24, 28px);
        --padding-x: 32px;
        --padding-y: 18px;
    }

    @media (min-width: 770px) and (max-width: 959px) {
        grid-template-columns: repeat(18, 30px);
        --padding-x: 20px;
        --padding-y: 18px;
    }

    @media (min-width: 560px) and (max-width: 769px) {
        grid-template-columns: repeat(12, 34px);
        --padding-x: 12px;
        --padding-y: 18px;
    }

    @media (max-width: 559px) {
        grid-template-columns: repeat(12, 34px);
        --padding-x: 12px;
        --padding-y: 18px;
    }
`;

const StyledColumn = styled.div`
    grid-column: 1/1;

    margin-left: -2px;
    height: 16px;
    line-height: 16px;

    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

const StyledSecond = styled.div`
    grid-column: 2/-1;
`;

const StyledHeadingAnchor = styled.a`
    display: inline-block;
    color: inherit;

    cursor: pointer;
    text-decoration: none;
    height: 16px;
    line-height: 16px;
`;

const StyledButtonToTop = styled.div`
    display: inline-flex;
    line-height: 12px;
`;

const StyledBodyS = styled(BodyS)`
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.96);
`;

export const PageHeader = ({
    lib,
    version,
    isScrolling = false,
    onScrollTop,
}: {
    lib: string;
    version: string;
    isScrolling?: boolean;
    onScrollTop?: () => void;
}) => {
    const url = isScrolling ? '' : '/';

    const handleLinkClick = (e: any) => {
        if (isScrolling) {
            e.preventDefault();
        }
    };

    const handleBackToTop = () => {
        if (isScrolling && onScrollTop) {
            onScrollTop();
        }
    };

    return (
        <StyledHeader>
            <StyledGrid>
                <StyledColumn className="item">
                    <StyledHeadingAnchor href={url} onClick={handleLinkClick}>
                        <StyledButtonToTop onClick={handleBackToTop}>
                            {isScrolling ? (
                                <IconArrowUp size="xs" color="inherit" />
                            ) : (
                                <IconArrowLeft size="xs" color="inherit" />
                            )}
                        </StyledButtonToTop>
                    </StyledHeadingAnchor>
                </StyledColumn>
                <StyledSecond>
                    <StyledHeadingAnchor href={url} onClick={handleLinkClick} className="trigger">
                        <StyledBodyS>
                            {lib}: {version}
                        </StyledBodyS>
                    </StyledHeadingAnchor>
                </StyledSecond>
            </StyledGrid>
        </StyledHeader>
    );
};
