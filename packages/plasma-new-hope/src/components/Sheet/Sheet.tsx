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
import { base as handlePlacementCSS } from './variations/_handlePlacement/base';
import { DEFAULT_Z_INDEX } from './utils';

/**
 * Открывает окно-шторку поверх основного экрана.
 */

export const sheetRoot = (Root: RootProps<HTMLDivElement, SheetProps>) =>
    forwardRef<HTMLDivElement, SheetProps>(
        (
            {
                opened,
                children,
                onClose,
                hasHandle = true,
                handlePlacement,
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
            const contentWrapperRef = useRef<HTMLDivElement>(null);
            const contentRef = useRef<HTMLDivElement>(null);
            const handleRef = useRef<HTMLDivElement>(null);

            useOverflow({ opened });
            useSheetSwipe({ contentWrapperRef, contentRef, handleRef, throttleMs, onClose });

            const hasHeader = Boolean(contentHeader);
            const hasFooter = Boolean(contentFooter);

            const closedClass = opened ? undefined : `${classes.closed}`;

            const overlayBackgroundToken = withBlur
                ? `var(${tokens.sheetOverlayWithBlurColor})`
                : `var(${tokens.sheetOverlayColor})`;

            return (
                <Root opened={opened} onClose={onClose} view={view} handlePlacement={handlePlacement} ref={rootRef}>
                    <StyledContentWrapper
                        opened={opened}
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
                    {withOverlay && opened && (
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
        handlePlacement: {
            css: handlePlacementCSS,
        },
    },
    defaults: {
        view: 'default',
        handlePlacement: 'outer',
    },
};
