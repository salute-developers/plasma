import styled, { css } from 'styled-components';
import { DsplS } from '@salutejs/plasma-b2c';
import { accent, whitePrimary } from '@salutejs/plasma-tokens-b2c';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { addGradient, multipleMediaQuery } from '../../mixins';

interface HeadingProps {
    title?: string;
    titleContentRight?: ReactNode;
    contentTopRight?: ReactNode;
    contentBottom?: ReactNode;
    children?: ReactNode;
    expanded?: boolean;
    onClick?: () => void;
    href?: string;
}

const Title = styled(DsplS)`
    color: ${whitePrimary};
`;

const TitleContentRightWrapper = styled.div<{ expanded?: boolean }>`
    width: auto;
    height: 100%;

    text-decoration: none;

    transition: color 0.3s, transform 0.2s;
    transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const TitleWrapper = styled.a`
    width: 100%;
    height: 5.75rem;

    cursor: pointer;
    text-decoration: none;
    color: ${whitePrimary};
    white-space: nowrap;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    ${multipleMediaQuery(['M'])(css`
        height: 4.75rem;
        gap: 0.5rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        height: 3.5rem;
    `)}

    &:hover {
        text-decoration: none;
        ${addGradient};

        & ${TitleContentRightWrapper} {
            color: ${accent};
        }
    }
`;

const MainContent = styled.div`
    display: flex;
    gap: 1rem;
`;

const TopRightContentWrapper = styled.div`
    height: min-content;

    display: flex;
`;

const BottomContentWrapper = styled.div`
    display: flex;
    gap: 1rem;

    overflow-x: scroll;
    overflow-y: hidden;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const ExpandableContent = styled.div<{ height: number; expanded?: boolean }>`
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: ${({ expanded, height }) => (expanded ? `${height}px` : '0')};
`;

const HeadingWrapper = styled.div`
    margin-bottom: 1.25rem;

    ${multipleMediaQuery(['M'])(css`
        margin-bottom: 1.125rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        margin-bottom: 1rem;
    `)}
`;

export const Heading = ({
    title,
    titleContentRight,
    expanded,
    contentBottom,
    contentTopRight,
    children,
    href,
    onClick,
}: HeadingProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(expanded ? contentRef.current.scrollHeight : 0);
        }
    }, [expanded]);

    return (
        <HeadingWrapper>
            <MainContent>
                <TitleWrapper href={href} onClick={onClick}>
                    <Title bold={false}>{title}</Title>
                    <TitleContentRightWrapper expanded={expanded}>{titleContentRight}</TitleContentRightWrapper>
                </TitleWrapper>

                <TopRightContentWrapper>{contentTopRight}</TopRightContentWrapper>
            </MainContent>

            <BottomContentWrapper>{contentBottom}</BottomContentWrapper>

            {children && (
                <ExpandableContent ref={contentRef} expanded={expanded} height={height}>
                    {children}
                </ExpandableContent>
            )}
        </HeadingWrapper>
    );
};
