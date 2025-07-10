import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft, IconArrowUp } from '@salutejs/plasma-icons';
import { BodyS } from '@salutejs/plasma-b2c';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0.5rem;
    left: 8px;
    z-index: 1000;

    display: grid;
    grid-template-columns: repeat(30, 1fr);
    gap: 8px;

    padding: 24px 54px;

    width: calc(100% - 1rem);
    max-width: 1600px;

    border-radius: 2rem;

    backdrop-filter: blur(4rem);

    @media (min-width: 960px) and (max-width: 1199px) {
        grid-template-columns: repeat(24, 1fr);

        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 770px) and (max-width: 959px) {
        grid-template-columns: repeat(18, 1fr);

        padding-left: 20px;
        padding-right: 20px;
    }

    @media (min-width: 560px) and (max-width: 769px) {
        grid-template-columns: repeat(12, 1fr);

        padding-left: 12px;
        padding-right: 12px;
    }

    @media (max-width: 559px) {
        grid-template-columns: repeat(12, 1fr);

        padding-left: 12px;
        padding-right: 12px;
    }
`;

const StyledHeadingAnchor = styled.a`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/6;

    color: rgba(255, 255, 255, 1);

    cursor: pointer;
    text-decoration: none;
`;

const StyledHeadingDiv = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/-1;

    color: rgba(255, 255, 255, 1);

    cursor: pointer;
    text-decoration: none;
`;

const StyledArrowLeft = styled(IconArrowLeft)`
    grid-column: 1/2;

    color: rgba(255, 255, 255, 0.56);

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

const StyledButtonToTop = styled.div`
    grid-column: 1/2;
    line-height: 12px;

    color: rgba(255, 255, 255, 0.56);

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

const ButtonToTop = ({ onClick }: { onClick: () => void }) => {
    return (
        <StyledButtonToTop onClick={onClick}>
            <IconArrowUp size="xs" color="inherit" />
        </StyledButtonToTop>
    );
};

const StyledBodyS = styled(BodyS)`
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.96);

    grid-column: 2/-1;
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
    return (
        <StyledHeader>
            {isScrolling ? (
                <StyledHeadingDiv>
                    <ButtonToTop
                        onClick={() => {
                            onScrollTop?.();
                        }}
                    />
                    <StyledBodyS>
                        {lib}: {version}
                    </StyledBodyS>
                </StyledHeadingDiv>
            ) : (
                <StyledHeadingAnchor href="\">
                    <StyledArrowLeft size="xs" color="inherit" />
                    <StyledBodyS>
                        {lib}: {version}
                    </StyledBodyS>
                </StyledHeadingAnchor>
            )}
        </StyledHeader>
    );
};
