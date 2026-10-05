import React, { forwardRef, useMemo } from 'react';
import cls from 'classnames';

import { RootProps } from '../../engines';
import { IconCross } from '../_Icon/Icons/IconCross';
import { IconCrossThin } from '../_Icon/Icons/IconCrossThin';

import { classes, tokens } from './Notification.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as layoutCSS } from './variations/_layout/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as closeIconTypeCSS } from './variations/_closeIconType/base';
import { NotificationLayout, NotificationProps, layouts } from './Notification.types';
import {
    ButtonsWrapper,
    CloseIconWrapper,
    ContentBox,
    IconWrapper,
    StyledImage,
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
export const notificationRoot = (Root: RootProps<HTMLDivElement, Omit<NotificationProps, 'title'>>) =>
    forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
        const {
            role = 'status',
            title,
            children: content,
            actions,
            view,
            size,
            iconPlacement,
            layout = layouts.vertical as NotificationLayout,
            icon,
            image,
            imageSize = 'small',
            showCloseIcon = true,
            closeIconType,
            customCloseIcon,
            textColor,
            titleColor,
            backgroundColor,
            width,
            maxWidth,
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
        const hasImage = layout === layouts.vertical && Boolean(image);
        const withImageClass = hasImage ? classes.withImage : undefined;
        const fullWidthImageClass = hasImage && imageSize === 'fullWidth' ? classes.fullWidthImage : undefined;
        const withoutIconClass = icon || hasImage ? undefined : classes.withoutIcon;
        const withoutCloseIconClass = showCloseIcon ? undefined : classes.withoutCloseIcon;

        const IconPlacementInternal = useMemo(() => (icon ? iconPlacement : undefined), [icon, iconPlacement]);
        const contentPlacement = hasImage ? 'top' : IconPlacementInternal;

        return (
            <Root
                view={view}
                size={size}
                layout={layout}
                closeIconType={closeIconType}
                ref={ref}
                role={role}
                aria-live={ariaLive}
                aria-atomic={ariaAtomic}
                {...rest}
            >
                <Wrapper
                    backgroundColor={backgroundColor}
                    width={width}
                    maxWidth={maxWidth}
                    className={cls(
                        classes.wrapper,
                        getLayoutClass(layout),
                        oneLineClass,
                        withoutCloseIconClass,
                        withImageClass,
                        fullWidthImageClass,
                    )}
                >
                    <ContentBox
                        iconPlacement={contentPlacement}
                        className={cls(classes.contentBox, getLayoutClass(layout), withoutIconClass)}
                    >
                        {hasImage && <StyledImage {...image} className={cls(classes.image, image?.className)} />}
                        {!hasImage && icon && (
                            <IconWrapper
                                iconPlacement={IconPlacementInternal}
                                className={cls(classes.icon, getLayoutClass(layout))}
                            >
                                {icon}
                            </IconWrapper>
                        )}
                        <TextBox
                            iconPlacement={contentPlacement}
                            showCloseIcon={showCloseIcon}
                            className={cls(classes.textbox, getLayoutClass(layout))}
                        >
                            {title && (
                                <StyledTitle className={classes.title} textColor={titleColor}>
                                    {title}
                                </StyledTitle>
                            )}
                            {content && (
                                <StyledContent className={classes.text} textColor={textColor}>
                                    {content}
                                </StyledContent>
                            )}
                        </TextBox>
                    </ContentBox>
                    {actions && (
                        <ButtonsWrapper
                            iconPlacement={contentPlacement}
                            className={cls(classes.buttonsWrapper, getLayoutClass(layout))}
                        >
                            {actions}
                        </ButtonsWrapper>
                    )}

                    {showCloseIcon && (
                        <CloseIconWrapper
                            view="clear"
                            size="s"
                            onClick={onCloseButtonClick}
                            className={cls(classes.closeIcon, getLayoutClass(layout))}
                        >
                            {customCloseIcon ||
                                (closeIconType === 'default' ? (
                                    <IconCross size="s" sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                                ) : (
                                    <IconCrossThin size="s" sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                                ))}
                        </CloseIconWrapper>
                    )}
                </Wrapper>
            </Root>
        );
    });

export const notificationConfig = {
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
        closeIconType: {
            css: closeIconTypeCSS,
        },
    },
    defaults: {
        view: 'default',
        layout: layouts.vertical,
        size: 'xs',
        closeIconType: 'default',
    },
};
