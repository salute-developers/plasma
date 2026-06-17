import React, { forwardRef, useMemo } from 'react';

import { RootProps } from '../../engines';
import { Overlay } from '../Overlay';
import { IconClose } from '../_Icon';
import { cx } from '../../utils';

import { getPanelZIndex } from './utils';
import { BottomSheetProps } from './BottomSheet.types';
import { classes, tokens } from './BottomSheet.tokens';
import { useBottomSheet } from './hooks/useBottomSheet';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import {
    BeforeHeader,
    CloseButton,
    StyledBody,
    Footer,
    Handler,
    Header,
    Panel,
    PanelContent,
} from './BottomSheet.styles';

const noop = () => {};

export const bottomSheetRoot = (Root: RootProps<HTMLDivElement, BottomSheetProps>) =>
    forwardRef<HTMLDivElement, BottomSheetProps>(
        (
            {
                opened = false,
                children,
                contentBeforeHeader,
                contentHeader,
                contentFooter,
                handlePlacement = 'inner',
                hasClose = true,
                hasHandle = true,
                withOverlay = true,
                withBlur = true,
                withTransition = true,
                maxHeight = '66dvh',
                zIndex = 1000,
                onClose = noop,
                className,
                view,
                size,
                ...rest
            },
            ref,
        ) => {
            const content = useMemo(() => [contentBeforeHeader, contentHeader, children, contentFooter], [
                contentBeforeHeader,
                contentHeader,
                children,
                contentFooter,
            ]);

            const { panelRef, bodyRef, handleRef, overflows, headerDivider, footerDivider } = useBottomSheet({
                opened,
                content,
                onClose,
                hasHandle,
            });

            const panelClassName = cx(classes.panel, withTransition && classes.animated, !opened && classes.closed);

            return (
                <Root ref={ref} className={className} view={view} size={size} {...rest}>
                    {withOverlay && opened && (
                        <Overlay
                            zIndex={String(zIndex)}
                            backgroundColorProperty={
                                withBlur ? `var(${tokens.overlayWithBlurColor})` : `var(${tokens.overlayColor})`
                            }
                            withBlur={withBlur}
                            isClickable
                            onOverlayClick={onClose}
                        />
                    )}

                    <Panel
                        ref={panelRef}
                        className={panelClassName}
                        style={{ maxHeight, zIndex: getPanelZIndex(zIndex) }}
                    >
                        {hasHandle && (
                            <Handler ref={handleRef} $placement={handlePlacement} className={classes.hasHandle} />
                        )}

                        {hasClose && (
                            <CloseButton view="clear" onClick={onClose} aria-label="Закрыть">
                                <IconClose size="s" color="inherit" />
                            </CloseButton>
                        )}

                        <PanelContent>
                            {contentBeforeHeader && (
                                <BeforeHeader className={classes.beforeHeaderSlot}>{contentBeforeHeader}</BeforeHeader>
                            )}

                            {contentHeader && (
                                <Header
                                    className={cx(classes.headerSlot, headerDivider && classes.headerDividerVisible)}
                                >
                                    {contentHeader}
                                </Header>
                            )}

                            {children && (
                                <StyledBody
                                    ref={bodyRef}
                                    className={cx(classes.bodySlot, overflows && classes.scrollable)}
                                >
                                    {children}
                                </StyledBody>
                            )}

                            {contentFooter && (
                                <Footer
                                    className={cx(classes.footerSlot, footerDivider && classes.footerDividerVisible)}
                                >
                                    {contentFooter}
                                </Footer>
                            )}
                        </PanelContent>
                    </Panel>
                </Root>
            );
        },
    );

export const bottomSheetConfig = {
    name: 'BottomSheet',
    tag: 'div',
    layout: bottomSheetRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
