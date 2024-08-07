import React, { forwardRef, useRef } from 'react';

import { RootProps } from '../../engines';
import { Overlay } from '../Overlay';
import { cx } from '../../utils';

import { SheetProps } from './Sheet.types';
import { useOverflow, useSheetSwipe } from './hooks';
import { classes, tokens } from './Sheet.tokens';
import {
    StyledContentWrapper,
    StyledSheetBody,
    StyledSheetContent,
    StyledSheetFooter,
    StyledSheetHandle,
    StyledSheetHeader,
} from './Sheet.styles';
import { base as viewCSS } from './variations/_view/base';
import { DEFAULT_Z_INDEX } from './utils';

/**
 * Открывает окно-шторку поверх основного экрана.
 */

export const sheetRoot = (Root: RootProps<HTMLDivElement, SheetProps>) =>
    forwardRef<HTMLDivElement, SheetProps>(
        (
            {
                opened,
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
            const innerIsOpen = Boolean(isOpen || opened);

            const contentWrapperRef = useRef<HTMLDivElement>(null);
            const contentRef = useRef<HTMLDivElement>(null);
            const handleRef = useRef<HTMLDivElement>(null);

            useOverflow({ opened: innerIsOpen });
            useSheetSwipe({ contentWrapperRef, contentRef, handleRef, throttleMs, onClose });

            const hasHeader = Boolean(contentHeader);
            const hasFooter = Boolean(contentFooter);

            const closedClass = innerIsOpen ? undefined : `${classes.closed}`;

            const overlayBackgroundToken = withBlur
                ? `var(${tokens.sheetOverlayWithBlurColor})`
                : `var(${tokens.sheetOverlayColor})`;

            return (
                <Root opened={innerIsOpen} onClose={onClose} view={view} ref={rootRef}>
                    <StyledContentWrapper
                        opened={innerIsOpen}
                        withTransition={withTransition}
                        className={cx(closedClass, className)}
                        ref={contentWrapperRef}
                        {...restProps}
                    >
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
                    {withOverlay && innerIsOpen && (
                        <Overlay
                            zIndex={DEFAULT_Z_INDEX}
                            backgroundColorProperty={overlayBackgroundToken}
                            withBlur={withBlur}
                            isClickable
                            onOverlayClick={onClose}
                        />
                    )}
                </Root>
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
