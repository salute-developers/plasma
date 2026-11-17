import React, { forwardRef } from 'react';
import cls from 'classnames';
import { useForkRef, useFocusTrap } from 'src/hooks';
import { getSizeValueFromProp, safeUseId } from 'src/utils';
import type { RootProps } from 'src/engines';

import { LayerOverlay } from '../OverlayProvider/ui/LayerOverlay';

import { classes, tokens } from './Drawer.tokens';
import type { DrawerProps } from './Drawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as borderRadiusCSS } from './variations/_borderRadius/base';
import { StyledPopup, StyledPanel } from './Drawer.styles';
import { useDrawer } from './hooks';

// issue #823

export const drawerRoot = (Root: RootProps<HTMLDivElement, DrawerProps>) =>
    forwardRef<HTMLDivElement, DrawerProps>(
        (
            {
                id,
                zIndex,
                popupInfo,
                withBlur,
                overlayProps,
                children,
                view,
                size,
                width,
                height,
                isOpen,
                opened,
                initialFocusRef,
                focusAfterRef,
                animationInfo,
                className,
                customBackgroundColor,
                customContentBackgroundColor,
                onClose,
                onCloseRequest,
                onOverlayClick,
                onEscKeyDown,
                offset,
                frame,
                positionFixed = false,
                borderRadius = 'none',
                placement = 'right',
                closeOnEsc = true,
                closeOnOverlayClick = true,
                asModal = true,
                draggable,
                ...rest
            },
            outerRef,
        ) => {
            const innerIsOpen = Boolean(isOpen || opened);

            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const { layerOptions, handleOverlayClick, getFocusScopeElements } = useDrawer({
                id: innerId,
                asModal,
                closeOnEsc,
                onEscKeyDown,
                onOverlayClick,
                onClose,
                onCloseRequest,
                popupInfo,
            });

            const trapRef = useFocusTrap(
                true,
                initialFocusRef,
                focusAfterRef,
                undefined,
                undefined,
                undefined,
                getFocusScopeElements,
            );

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRef);
            const overlayBackgroundToken = withBlur
                ? `var(${tokens.drawerOverlayWithBlurColor})`
                : `var(${tokens.drawerOverlayColor})`;
            const innerWidth = width ? getSizeValueFromProp(width) : '100%';
            const innerHeight = height ? getSizeValueFromProp(height) : '100%';
            const overlayPosition =
                overlayProps?.position ?? (frame === undefined || frame === 'document' ? 'fixed' : 'absolute');

            const placementClass = placement ? classes[`${placement}Placement` as keyof typeof classes] : undefined;

            return (
                <StyledPopup
                    id={innerId}
                    ref={asModal ? innerRef : outerRef}
                    role="dialog"
                    aria-modal={asModal ? 'true' : undefined}
                    layerOptions={layerOptions}
                    className={cls(placementClass, className, {
                        [classes.enterCustomAnimation]: animationInfo?.enter,
                        [classes.exitCustomAnimation]: animationInfo?.exit,
                    })}
                    opened={innerIsOpen}
                    zIndex={zIndex}
                    placement={placement}
                    popupInfo={popupInfo}
                    frame={frame}
                    positionFixed={positionFixed}
                    width={innerWidth}
                    height={innerHeight}
                    offset={offset}
                    withAnimation
                    drawerAnimationInfo={animationInfo}
                    overlay={
                        asModal && (
                            <Root view={view}>
                                <LayerOverlay
                                    className={classes.overlay}
                                    zIndex={zIndex}
                                    backgroundColorProperty={overlayBackgroundToken}
                                    withBlur={withBlur}
                                    isClickable={closeOnOverlayClick}
                                    onOverlayClick={handleOverlayClick}
                                    style={{ ...overlayProps, position: overlayPosition }}
                                />
                            </Root>
                        )
                    }
                    {...rest}
                >
                    <Root
                        className={classes.panel}
                        view={view}
                        size={size}
                        style={{ width: innerWidth, height: innerHeight }}
                        borderRadius={borderRadius}
                    >
                        <StyledPanel
                            width={innerWidth}
                            height={innerHeight}
                            customBackgroundColor={customBackgroundColor}
                            customContentBackgroundColor={customContentBackgroundColor}
                        >
                            {children}
                        </StyledPanel>
                    </Root>
                </StyledPopup>
            );
        },
    );

export const drawerConfig = {
    name: 'Drawer',
    tag: 'div',
    layout: drawerRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        borderRadius: {
            css: borderRadiusCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        borderRadius: 'none',
    },
};
