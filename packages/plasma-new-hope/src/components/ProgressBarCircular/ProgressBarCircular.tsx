import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { ProgressBarCircularProps } from './ProgressBarCircular.types';
import {
    base,
    StyledSVG,
    StyledBackgroundCircle,
    StyledProgressCircle,
    StyledContent,
} from './ProgressBarCircular.styles';
import { classes } from './ProgressBarCircular.tokens';

export const progressBarCircularRoot = (Root: RootProps<HTMLDivElement, ProgressBarCircularProps>) =>
    forwardRef<HTMLDivElement, ProgressBarCircularProps>((props, ref) => {
        const {
            value = 0,
            maxValue = 100,
            size,
            view,
            children,
            className,
            strokeSize,
            hasTrack = true,
            ...rest
        } = props;

        const clampedValue = Math.min(Math.max(value, 0), maxValue);
        const percentage = (clampedValue / maxValue) * 100;

        const center = 50;

        return (
            <Root ref={ref} view={view} size={size} className={className} {...rest}>
                <StyledSVG width="100%" height="100%" viewBox="0 0 100 100" className={classes.svg}>
                    {hasTrack && (
                        <StyledBackgroundCircle
                            customStrokeWidth={strokeSize}
                            cx={center}
                            cy={center}
                            className={classes.backgroundCircle}
                        />
                    )}
                    <StyledProgressCircle
                        cx={center}
                        cy={center}
                        customStrokeWidth={strokeSize}
                        className={classes.progressCircle}
                        percent={percentage}
                        transform="rotate(-90 50 50)"
                    />
                </StyledSVG>

                {children && <StyledContent className={classes.content}>{children}</StyledContent>}
            </Root>
        );
    });

export const progressBarCircularConfig = {
    name: 'ProgressBarCircular',
    tag: 'div',
    layout: progressBarCircularRoot,
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
