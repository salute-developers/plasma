import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';
import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { LoaderProps } from './Loader.types';
import {
    base,
    LoaderContentWrapper,
    LoaderWrapper,
    StyledOverlay,
    StyledProgressBarCircular,
    StyledSpinner,
    LoaderText,
} from './Loader.styles';
import { classes, tokens } from './Loader.tokens';

export const loaderRoot = (Root: RootProps<HTMLDivElement, LoaderProps>) =>
    forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
        const {
            type = 'spinner',
            hasOverlay = false,
            withBlur = false,
            value = 0,
            overlayColor,
            maxValue = 100,
            size,
            view,
            children,
            className,
            strokeSize,
            hasTrack,
            style,
            zIndex = DEFAULT_Z_INDEX,
            onOverlayClick,
            text,
            textPosition = 'bottom',
            ...rest
        } = props;

        const isHorizontalLayout = text && textPosition === 'right';
        const isVerticalLayout = text && textPosition === 'bottom';

        const loaderClassName = [
            isHorizontalLayout && classes.loaderHorizontal,
            isVerticalLayout && classes.loaderVertical,
        ]
            .filter(Boolean)
            .join(' ');

        const loaderContent = (
            <Root
                ref={ref}
                view={view}
                size={size}
                className={cls(className, ...loaderClassName)}
                style={style}
                {...rest}
            >
                {type === 'spinner' ? (
                    <StyledSpinner size={size} view={view} />
                ) : (
                    <StyledProgressBarCircular
                        value={value}
                        maxValue={maxValue}
                        strokeSize={strokeSize}
                        size={size}
                        view={view}
                        hasTrack={hasTrack}
                    >
                        {children}
                    </StyledProgressBarCircular>
                )}
                {text && <LoaderText className={cls(...loaderClassName)}>{text}</LoaderText>}
            </Root>
        );

        if (!hasOverlay) {
            return loaderContent;
        }

        const overlayBackgroundToken = overlayColor || `var(${tokens.overlayColor})`;

        return (
            <LoaderWrapper zIndex={zIndex}>
                <StyledOverlay
                    className={classes.loaderOverlay}
                    backgroundColorToken={overlayBackgroundToken}
                    withBlur={withBlur}
                    onClick={onOverlayClick}
                />
                <LoaderContentWrapper>{loaderContent}</LoaderContentWrapper>
            </LoaderWrapper>
        );
    });

export const loaderConfig = {
    name: 'Loader',
    tag: 'div',
    layout: loaderRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
