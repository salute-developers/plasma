import React, { ReactNode } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { overlay, primary, backgroundPrimary } from '@salutejs/plasma-tokens';

import { ThemeProviderContext } from '../../hooks';

import { useSheetSwipe } from './useSheetSwipe';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Состояние шторки, открыта или скрыта
     */
    isOpen: boolean;

    /**
     * Обработчик закрытия шторки. Вызывается при клике по оверлею или смахиванию шторки вниз
     */
    onClose: () => void;

    /**
     * Наличие оверлея шторки. Если включен, то контент под шторкой перекрывается оверлеем, при нажатии на
     * который шторка закрывается.
     */
    withOverlay?: boolean;
    children?: ReactNode;

    /**
     * Наличие состояния анимации/перехода, по-умолчанию true.
     */
    withTransition?: boolean;

    /**
     * Throttling внутренних обработчиков события onScroll
     */
    throttleMs?: number;
}

type CommonProps = Pick<SheetProps, 'withTransition' | 'isOpen'> & {
    theme: ThemeProviderContext;
};

type HandleTransitionProps = Omit<CommonProps, 'isOpen'>;

const handleTransition = (transition: string) => (props: HandleTransitionProps): string => {
    const {
        theme: { lowPerformance },
        withTransition,
    } = props;

    return !withTransition || lowPerformance ? 'unset' : transition;
};

const NoScroll = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const StyledWrapper = styled.div<CommonProps>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    transition: ${handleTransition('all 0.5s 0.1s')};
    z-index: 1000;

    ${({ isOpen }) =>
        !isOpen &&
        css`
            opacity: 0;
            visibility: hidden;
        `}
`;

const StyledContentWrapper = styled.div<CommonProps>`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    transition: ${handleTransition('transform 0.5s')};

    ${({ isOpen }) =>
        !isOpen &&
        css`
            transform: translateY(100%);
        `}
`;

const StyledOverlay = styled.div<{ withOverlay: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${({ withOverlay }) => (withOverlay ? overlay : 'transparent')};
`;

const StyledSheetContent = styled.div`
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: ${backgroundPrimary};
    padding: 1rem;

    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledSheetHandle = styled.div`
    width: 4rem;
    padding: 1.75rem 0;
    margin: -1.5rem 0;
    opacity: 0.65;
    align-self: center;

    &::before {
        content: '';
        display: block;
        border-radius: 0.625rem;
        background-color: ${primary};
        height: 0.25rem;
    }
`;

/**
 * Открывает окно-шторку поверх основного экрана.
 * Только для приложения Салют.
 */
export const Sheet = ({
    isOpen,
    children,
    onClose,
    withOverlay = true,
    withTransition = true,
    throttleMs,
    ...restProps
}: SheetProps) => {
    const contentWrapperRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const handleRef = React.useRef<HTMLDivElement>(null);

    useSheetSwipe({ contentWrapperRef, contentRef, handleRef, throttleMs, onClose });

    return (
        <StyledWrapper isOpen={isOpen} withTransition={withTransition} {...restProps}>
            {isOpen && <NoScroll />}
            <StyledContentWrapper isOpen={isOpen} withTransition={withTransition} ref={contentWrapperRef}>
                <StyledSheetHandle ref={handleRef} />
                <StyledSheetContent ref={contentRef}>{children}</StyledSheetContent>
            </StyledContentWrapper>
            <StyledOverlay withOverlay={withOverlay} onClick={onClose} />
        </StyledWrapper>
    );
};
