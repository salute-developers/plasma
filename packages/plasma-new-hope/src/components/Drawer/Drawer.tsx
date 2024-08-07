import React, { forwardRef, useMemo } from 'react';
import { useFocusTrap, useForkRef, safeUseId } from '@salutejs/plasma-core';

import { component, mergeConfig } from '../../engines';
import type { RootProps } from '../../engines';
import { usePopupContext } from '../Popup';
import { Overlay } from '../Overlay';
import { DEFAULT_Z_INDEX } from '../Popup/utils';
import { panelConfig } from '../Panel';
import { getSizeValueFromProp } from '../../utils';

import { classes, tokens } from './Drawer.tokens';
import type { DrawerProps } from './Drawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as borderRadiusCSS } from './variations/_borderRadius/base';
import { StyledPopup } from './Drawer.styles';
import { getIdLastDrawer } from './DrawerContext';
import { useDrawer } from './hooks';

// issue #823
const mergedPanelConfig = mergeConfig(panelConfig);
const Panel = component(mergedPanelConfig);

export const drawerRoot = (Root: RootProps<HTMLDivElement, DrawerProps>) =>
    forwardRef<HTMLDivElement, DrawerProps>(
        (
            {
                id,
                zIndex,
                popupInfo,
                withBlur,
                children,
                view,
                size,
                width,
                height,
                isOpen,
                opened,
                initialFocusRef,
                focusAfterRef,
                className,
                onClose,
                onOverlayClick,
                onEscKeyDown,
                offset,
                frame,
                borderRadius = 'none',
                placement = 'right',
                closeOnEsc = true,
                closeOnOverlayClick = true,
                asModal = true,
                ...rest
            },
            outerRef,
        ) => {
            const innerIsOpen = Boolean(isOpen || opened);

            const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);
            const popupController = usePopupContext();

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRef);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const overlayBackgroundToken = withBlur
                ? `var(${tokens.drawerOverlayWithBlurColor})`
                : `var(${tokens.drawerOverlayColor})`;
            const innerWidth = width ? getSizeValueFromProp(width) : '100%';
            const innerHeight = height ? getSizeValueFromProp(height) : '100%';

            const { drawerInfo } = useDrawer({
                id: innerId,
                isOpen: innerIsOpen,
                closeOnEsc,
                onEscKeyDown,
                onClose,
                popupInfo,
                disableScroll: asModal,
            });
            const transparent = useMemo(() => getIdLastDrawer(popupController.items) !== innerId, [
                innerId,
                popupController.items,
            ]);

            const onDrawerOverlayKeyDown = (event: React.MouseEvent<HTMLDivElement>) => {
                if (onOverlayClick) {
                    onOverlayClick(event);
                    return;
                }

                if (onClose) {
                    onClose();
                }
            };

            return (
                <StyledPopup
                    id={innerId}
                    ref={asModal ? innerRef : outerRef}
                    opened={innerIsOpen}
                    zIndex={zIndex}
                    placement={placement}
                    popupInfo={drawerInfo}
                    frame={frame}
                    width={innerWidth}
                    height={innerHeight}
                    offset={offset}
                    withAnimation
                    overlay={
                        asModal && (
                            <Root view={view}>
                                <Overlay
                                    className={classes.overlay}
                                    zIndex={zIndex || DEFAULT_Z_INDEX}
                                    backgroundColorProperty={overlayBackgroundToken}
                                    withBlur={withBlur}
                                    transparent={transparent}
                                    isClickable={closeOnOverlayClick}
                                    onOverlayClick={onDrawerOverlayKeyDown}
                                />
                            </Root>
                        )
                    }
                    {...rest}
                >
                    <Root
                        view={view}
                        size={size}
                        style={{ width: innerWidth, height: innerHeight }}
                        borderRadius={borderRadius}
                    >
                        <Panel width={innerWidth} height={innerHeight} className={className}>
                            {children}
                        </Panel>
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
