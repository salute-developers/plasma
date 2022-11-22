import { Container } from '@salutejs/plasma-ui';
import React, { PropsWithChildren } from 'react';
import styled, { CSSObject } from 'styled-components';
import { Insets } from '@salutejs/client';

import { useWindowInnerHeight } from '../../hooks/useWindowInnerHeight';
import { useAssistantInsets } from '../AssistantProvider';

import { LayoutElementContext } from './LayoutElementContext';

interface LayoutProps {
    ignoreInsets?: boolean;
}

interface StyledLayoutProps {
    insets: Insets;
    windowInnerHeight: number | null;
}

const capitalize = (string: string): string => `${string[0].toUpperCase()}${string.slice(1)}`;

const insetsToCSSObject = ({ insets }: StyledLayoutProps): CSSObject =>
    (Object.keys(insets) as Array<keyof Insets>).reduce((acc, key) => {
        if (insets[key]) {
            acc[`padding${capitalize(key)}`] = insets[key];
        }

        return acc;
    }, {} as CSSObject);

export const StyledLayout = styled.div<StyledLayoutProps>`
    ${insetsToCSSObject}

    overflow-y: auto;
    overflow-x: hidden;

    height: ${({ windowInnerHeight }) => (windowInnerHeight ? `${windowInnerHeight}px` : '100vh')};

    outline: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const defaultInsets: Insets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, ignoreInsets }) => {
    const insets = useAssistantInsets();
    const scrollableElementRef = React.useRef<HTMLDivElement>(null);
    const windowInnerHeight = useWindowInnerHeight();

    return (
        <LayoutElementContext.Provider value={scrollableElementRef.current}>
            <StyledLayout
                windowInnerHeight={windowInnerHeight}
                insets={ignoreInsets ? defaultInsets : insets}
                ref={scrollableElementRef}
            >
                <Container>{children}</Container>
            </StyledLayout>
        </LayoutElementContext.Provider>
    );
};
