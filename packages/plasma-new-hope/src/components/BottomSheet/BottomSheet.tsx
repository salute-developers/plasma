import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { Overlay } from '../Overlay';
import { IconClose } from '../_Icon';
import { cx } from '../../utils';

import { BottomSheetProps } from './BottomSheet.types';
import { classes, tokens } from './BottomSheet.tokens';
import { useBottomSheet } from './hooks/useBottomSheet';
import {
    CloseButton,
    StyledBody,
    StyledContent,
    StyledFooter,
    StyledHandle,
    StyledHeader,
    StyledImageWrapper,
    StyledPanel,
    StyledTitle,
    StyledTitleRow,
} from './BottomSheet.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

const OVERLAY_Z_INDEX = '1000';

export const bottomSheetRoot = (Root: RootProps<HTMLDivElement, Omit<BottomSheetProps, 'title'>>) =>
    forwardRef<HTMLDivElement, BottomSheetProps>(
        (
            {
                opened = false,
                onClose,
                title,
                image,
                children,
                buttons,
                hasClose = true,
                hasHandle,
                withOverlay = true,
                withBlur = false,
                withTransition = true,
                view,
                size,
                className,
                ...rest
            },
            ref,
        ) => {
            const {
                panelRef,
                contentRef,
                handleRef,
                footerRef,
                draggable,
                heightState,
                headerDivider,
                footerDivider,
            } = useBottomSheet({ opened, content: children, onClose, hasHandle });

            const hasHeader = !image && (Boolean(title) || hasClose);
            const hasButtons = Boolean(buttons);
            const isConstrained = heightState !== 'auto';

            const showGrip = draggable && hasHandle !== false;

            const panelClassName = cx(
                classes.panel,
                withTransition && classes.animated,
                !opened && classes.closed,
                Boolean(image) && classes.withImage,
                heightState === 'collapsed' && classes.collapsed,
                heightState === 'expanded' && classes.expanded,
            );

            return (
                <Root ref={ref} view={view} size={size} onClose={onClose} className={className} {...rest}>
                    {withOverlay && opened && (
                        <Overlay
                            zIndex={OVERLAY_Z_INDEX}
                            backgroundColorProperty={
                                withBlur ? `var(${tokens.overlayWithBlurColor})` : `var(${tokens.overlayColor})`
                            }
                            withBlur={withBlur}
                            isClickable
                            onOverlayClick={onClose}
                        />
                    )}
                    <StyledPanel ref={panelRef} className={panelClassName}>
                        {draggable && <StyledHandle ref={handleRef} className={cx(showGrip && classes.withGrip)} />}
                        <StyledContent ref={contentRef} className={cx(isConstrained && classes.scrollable)}>
                            {image && (
                                <StyledImageWrapper>
                                    {image}
                                    {hasClose && (
                                        <CloseButton
                                            view="clear"
                                            onClick={onClose}
                                            className={classes.closeIconOnImage}
                                            aria-label="Закрыть"
                                        >
                                            <IconClose size="s" color="inherit" />
                                        </CloseButton>
                                    )}
                                </StyledImageWrapper>
                            )}
                            {hasHeader && (
                                <StyledHeader className={cx(headerDivider && classes.headerDividerVisible)}>
                                    <StyledTitleRow>
                                        {title && <StyledTitle>{title}</StyledTitle>}
                                        {hasClose && (
                                            <CloseButton view="clear" onClick={onClose} aria-label="Закрыть">
                                                <IconClose size="s" color="inherit" />
                                            </CloseButton>
                                        )}
                                    </StyledTitleRow>
                                </StyledHeader>
                            )}
                            {image && title && (
                                <StyledTitleRow className={classes.afterImage}>
                                    <StyledTitle>{title}</StyledTitle>
                                </StyledTitleRow>
                            )}
                            <StyledBody>{children}</StyledBody>
                        </StyledContent>
                        {hasButtons && (
                            <StyledFooter ref={footerRef} className={cx(footerDivider && classes.footerDividerVisible)}>
                                {buttons}
                            </StyledFooter>
                        )}
                    </StyledPanel>
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
