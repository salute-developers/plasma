import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { component } from '../../engines';
import { Overlay } from '../Overlay';
import { popupConfig } from '../Popup';
import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { LoaderProps } from './Loader.types';
import { base, StyledProgressBarCircular, StyledSpinner } from './Loader.styles';
import { classes, tokens } from './Loader.tokens';

const Popup = component(popupConfig);

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
            ...rest
        } = props;

        const loaderContent = (
            <Root ref={ref} view={view} size={size} className={className} style={style} {...rest}>
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
            </Root>
        );

        if (!hasOverlay) {
            return loaderContent;
        }

        const overlayBackgroundToken = overlayColor || `var(${tokens.overlayColor})`;

        const overlayNode = (
            <Overlay
                className={classes.loaderOverlay}
                zIndex={zIndex || DEFAULT_Z_INDEX}
                backgroundColorProperty={overlayBackgroundToken}
                withBlur={withBlur}
                isClickable={Boolean(onOverlayClick)}
                onOverlayClick={onOverlayClick}
            />
        );

        return (
            <Popup opened placement="center" zIndex={zIndex} overlay={overlayNode}>
                {loaderContent}
            </Popup>
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
