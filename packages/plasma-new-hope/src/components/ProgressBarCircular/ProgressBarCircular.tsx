import React, { forwardRef, useState, useRef, useLayoutEffect } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines';
import { cx, getTokenValueInPixels } from '../../utils';

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
import { classes, tokens } from './ProgressBarCircular.tokens';

export const progressBarCircularRoot = (Root: RootProps<HTMLDivElement, ProgressBarCircularProps>) =>
    forwardRef<HTMLDivElement, ProgressBarCircularProps>((props, ref) => {
        const {
            value = 0,
            maxValue = 100,
            size,
            view,
            children,
            className,
            strokeWidth: strokeWidthProp,
            ...rest
        } = props;

        const [strokeWidthCSS, setStrokeWidthCSS] = useState<number>(0);
        const [widthCSS, setWidthCSS] = useState<number>(0);
        const rootRef = useRef<HTMLDivElement>(null);

        const rootForkRef = useForkRef(rootRef, ref);

        const clampedValue = Math.min(Math.max(value, 0), maxValue);
        const percentage = (clampedValue / maxValue) * 100;

        const strokeWidth = (strokeWidthProp ?? strokeWidthCSS) * 2;

        const center = 50;
        const radius = center - (50 / widthCSS) * (strokeWidth / 2);
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        useLayoutEffect(() => {
            if (rootRef.current) {
                const strokeWidthFromCSS = getTokenValueInPixels(tokens.progressStrokeWidth, rootRef.current);
                const widthFromCSS = getTokenValueInPixels(tokens.width, rootRef.current);
                setStrokeWidthCSS(strokeWidthFromCSS ?? 0);
                setWidthCSS(widthFromCSS ?? 0);
            }
        }, [rootRef, size]);

        return (
            <Root ref={rootForkRef} view={view} size={size} className={cx(className)} {...rest}>
                <StyledSVG width="100%" height="100%" viewBox="0 0 100 100" className={classes.svg}>
                    <StyledBackgroundCircle
                        customStrokeWidth={(50 / widthCSS) * strokeWidth}
                        cx={center}
                        cy={center}
                        r={radius}
                        className={classes.backgroundCircle}
                    />
                    <StyledProgressCircle
                        cx={center}
                        cy={center}
                        r={radius}
                        customStrokeWidth={(50 / widthCSS) * strokeWidth}
                        className={classes.progressCircle}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
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
