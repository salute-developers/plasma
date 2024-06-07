import React, { forwardRef } from 'react';

import { cx } from '../../utils';
import { RootProps } from '../../engines';
import { Overlay } from '../Overlay';

import { SheetProps } from './Sheet.types';
import { useSheet, useSheetSwipe } from './hooks';
import { classes, tokens } from './Sheet.tokens';
import {
    StyledContentWrapper,
    StyledSheetBody,
    StyledSheetContent,
    StyledSheetFooter,
    StyledSheetHandle,
    StyledSheetHeader,
    StyledWrapper,
} from './Sheet.styles';
import { base as viewCSS } from './variations/_view/base';
import { DEFAULT_Z_INDEX } from './utils';

/**
 * Sheet
 * Открывает окно-шторку поверх основного экрана.
 */

export const sheetRoot = (Root: RootProps<HTMLDivElement, SheetProps>) =>
    forwardRef<HTMLDivElement, SheetProps>(
        (
            {
                isOpen,
                children,
                onClose,
                hasHandle = true,
                contentHeader,
                isHeaderFixed = false,
                contentFooter,
                isFooterFixed = false,
                withOverlay = true,
                withBlur = false,
                withTransition = true,
                throttleMs,
                className,
                view,
                ...restProps
            },
            rootRef,
        ) => {
            const contentWrapperRef = React.useRef<HTMLDivElement>(null);
            const contentRef = React.useRef<HTMLDivElement>(null);
            const handleRef = React.useRef<HTMLDivElement>(null);

            useSheet({ isOpen });
            useSheetSwipe({ contentWrapperRef, contentRef, handleRef, throttleMs, onClose });

            const hasHeader = !!contentHeader;
            const hasFooter = !!contentFooter;

            const isClosedClass = isOpen ? undefined : `${classes.isClosed}`;

            const overlayBackgroundToken = withBlur
                ? `var(${tokens.sheetOverlayWithBlurColor})`
                : `var(${tokens.sheetOverlayColor})`;

            return (
                <StyledWrapper
                    isOpen={isOpen}
                    withTransition={withTransition}
                    className={cx(isClosedClass, className)}
                    {...restProps}
                >
                    <Root isOpen={isOpen} onClose={onClose} view={view} ref={rootRef}>
                        <StyledContentWrapper isOpen={isOpen} withTransition={withTransition} ref={contentWrapperRef}>
                            {hasHandle && <StyledSheetHandle ref={handleRef} />}
                            <StyledSheetContent hasHeader={hasHeader} hasFooter={hasFooter} ref={contentRef}>
                                {hasHeader && (
                                    <StyledSheetHeader isHeaderFixed={isHeaderFixed}>{contentHeader}</StyledSheetHeader>
                                )}
                                <StyledSheetBody>{children}</StyledSheetBody>
                                {hasFooter && (
                                    <StyledSheetFooter isFooterFixed={isFooterFixed}>{contentFooter}</StyledSheetFooter>
                                )}
                            </StyledSheetContent>
                        </StyledContentWrapper>
                        {withOverlay && (
                            <Overlay
                                zIndex={DEFAULT_Z_INDEX}
                                backgroundColorProperty={overlayBackgroundToken}
                                withBlur={withBlur}
                                isClickable
                                onOverlayClick={onClose}
                            />
                        )}
                    </Root>
                </StyledWrapper>
            );
        },
    );

export const sheetConfig = {
    name: 'Sheet',
    tag: 'div',
    layout: sheetRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
