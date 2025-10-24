import React, { CSSProperties, forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { LoaderProps } from './Loader.types';
import { base, StyledProgressBarCircular, StyledSpinner } from './Loader.styles';
import { classes, tokens } from './Loader.tokens';

export const loaderRoot = (Root: RootProps<HTMLDivElement, LoaderProps>) =>
    forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
        const {
            type = 'spinner',
            hasBlur = false,
            hasOverlay = false,
            value = 0,
            blur = 'medium',
            overlayColor,
            maxValue = 100,
            size,
            view,
            children,
            className,
            strokeWidth,
            style,
            ...rest
        } = props;

        const blurClass = hasBlur ? classes[`${blur}LoaderBlur` as keyof typeof classes] : '';

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                className={cls(className, blurClass, { [classes.loaderHasOverlay]: hasOverlay })}
                style={
                    {
                        ...style,
                        '--plasma_private-loader-overlay-color': overlayColor || `var(${tokens.overlayColor})`,
                    } as CSSProperties
                }
                {...rest}
            >
                {type === 'spinner' ? (
                    <StyledSpinner size={size} view={view} />
                ) : (
                    <StyledProgressBarCircular
                        value={value}
                        maxValue={maxValue}
                        strokeWidth={strokeWidth}
                        size={size}
                        view={view}
                    >
                        {children}
                    </StyledProgressBarCircular>
                )}
            </Root>
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
