import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';
import { IconCross } from '../_Icon/Icons/IconCross';
import { IconCrossThin } from '../_Icon/Icons/IconCrossThin';

import { classes, tokens } from './Toast.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as closeIconTypeCSS } from './variations/_closeIconType/base';
import { ToastProps } from './Toast.types';
import { CloseIconWrapper, StyledContent, StyledContentLeft, base } from './Toast.styles';

// TODO https://github.com/salute-developers/plasma/issues/1015
export const toastRoot = (Root: RootProps<HTMLDivElement, ToastProps>) =>
    forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
        const {
            role = 'status',
            width,
            text,
            hasClose,
            contentLeft,
            view,
            size,
            pilled,
            className,
            style,
            closeIconType,
            onCloseButtonClick,
            textColor,
            ...rest
        } = props;
        const pilledClass = pilled ? classes.toastPilled : undefined;
        const fixedWidth = !Number.isNaN(Number(width)) ? `${width}%` : width;

        let ariaLive: 'assertive' | 'polite' = 'polite';
        let ariaAtomic = false;

        if (role === 'alert') {
            ariaLive = 'assertive';
        } else if (role === 'status') {
            ariaAtomic = true;
        }

        return (
            <Root
                view={view}
                size={size}
                pilled={pilled}
                closeIconType={closeIconType}
                className={cx(pilledClass, className)}
                style={{ width: width ? fixedWidth : 'unset', ...style }}
                ref={ref}
                role={role}
                aria-live={ariaLive}
                aria-atomic={ariaAtomic}
                {...rest}
            >
                {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                <StyledContent textColor={textColor}>{text}</StyledContent>
                {hasClose && (
                    <CloseIconWrapper
                        view="clear"
                        size="s"
                        onClick={onCloseButtonClick}
                        className={cx(classes.closeIcon)}
                        stretching="fixed"
                    >
                        {closeIconType === 'default' ? (
                            <IconCross size="s" sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                        ) : (
                            <IconCrossThin size="s" sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                        )}
                    </CloseIconWrapper>
                )}
            </Root>
        );
    });

export const toastConfig = {
    name: 'Toast',
    tag: 'div',
    layout: toastRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
        closeIconType: {
            css: closeIconTypeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
        closeIconType: 'default',
    },
};
