import React, { forwardRef, useMemo } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { IconCross } from '../_Icon/Icons/IconCross';

import { classes } from './Notification.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as layoutCSS } from './variations/_layout/base';
import { base as sizeCSS } from './variations/_size/base';
import { NotificationLayout, NotificationProps, layouts } from './Notification.types';
import {
    ButtonsWrapper,
    CloseIconWrapper,
    ContentBox,
    IconWrapper,
    StyledContent,
    StyledNotification,
    StyledTitle,
    TextBox,
    Wrapper,
} from './Notification.styles';
import { getLayoutClass } from './utils';

/**
 * Компонент для небольших уведомлений пользователя
 */
export const notificationRoot = (Root: RootProps<HTMLDivElement, NotificationProps>) =>
    forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
        const {
            role = 'status',
            title,
            children: content,
            actions,
            view,
            size,
            iconPlacement,
            showCloseIcon = true,
            layout = layouts.vertical as NotificationLayout,
            icon,
            onCloseButtonClick,
            ...rest
        } = props;

        let ariaLive: 'assertive' | 'polite' = 'polite';
        let ariaAtomic = false;

        if (role === 'alert') {
            ariaLive = 'assertive';
        } else if (role === 'status') {
            ariaAtomic = true;
        }

        const isOneLine = !content || !title;
        const oneLineClass = isOneLine ? classes.oneLine : undefined;
        const withoutIconClass = icon ? undefined : classes.withoutIcon;
        const withoutCloseIconClass = showCloseIcon ? undefined : classes.withoutCloseIcon;

        const IconPlacementInternal = useMemo(() => (icon ? iconPlacement : undefined), [icon, iconPlacement]);

        return (
            <Root
                view={view}
                size={size}
                layout={layout}
                ref={ref}
                role={role}
                aria-live={ariaLive}
                aria-atomic={ariaAtomic}
                {...rest}
            >
                <Wrapper className={cx(classes.wrapper, getLayoutClass(layout), oneLineClass, withoutCloseIconClass)}>
                    <ContentBox
                        iconPlacement={IconPlacementInternal}
                        className={cx(classes.contentBox, getLayoutClass(layout), withoutIconClass)}
                    >
                        {icon && (
                            <IconWrapper
                                iconPlacement={IconPlacementInternal}
                                className={cx(classes.icon, getLayoutClass(layout))}
                            >
                                {icon}
                            </IconWrapper>
                        )}
                        <TextBox
                            iconPlacement={IconPlacementInternal}
                            showCloseIcon={showCloseIcon}
                            className={cx(classes.textbox, getLayoutClass(layout))}
                        >
                            {title && <StyledTitle className={classes.title}>{title}</StyledTitle>}
                            {content && <StyledContent className={classes.text}>{content}</StyledContent>}
                        </TextBox>
                    </ContentBox>
                    {actions && (
                        <ButtonsWrapper
                            iconPlacement={IconPlacementInternal}
                            className={cx(classes.buttonsWrapper, getLayoutClass(layout))}
                        >
                            {actions}
                        </ButtonsWrapper>
                    )}

                    {showCloseIcon && (
                        <CloseIconWrapper
                            view="clear"
                            size="s"
                            onClick={onCloseButtonClick}
                            className={cx(classes.closeIcon, getLayoutClass(layout))}
                        >
                            <IconCross size="s" color="inherit" />
                        </CloseIconWrapper>
                    )}
                </Wrapper>
            </Root>
        );
    });

export const noticationConfig = {
    name: 'Notification',
    tag: 'div',
    layout: notificationRoot,
    base: StyledNotification,
    variations: {
        layout: {
            css: layoutCSS,
        },
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        layout: layouts.vertical,
        size: 'xs',
    },
};
