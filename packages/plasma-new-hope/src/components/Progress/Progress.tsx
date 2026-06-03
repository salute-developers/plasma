import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { ProgressProps } from './Progress.types';
import {
    StyledCaption,
    StyledProgress,
    StyledTopRow,
    StyledMidRow,
    StyledTrack,
    StyledValue,
    base,
} from './Progress.styles';
import { classes } from './Progress.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as progressSizeCSS } from './variations/_progress-size/base';
import { LabelWrapper } from './ui';

export const progressRoot = (Root: RootProps<HTMLDivElement, ProgressProps>) =>
    forwardRef<HTMLDivElement, ProgressProps>(
        (
            {
                view,
                status,
                size,
                progressSize,
                value,
                hasValue = true,
                displayValue,
                labelIcon,
                labelTextPlacement = 'right',
                label,
                labelPlacement = 'top',
                valuePlacement = 'right',
                caption,
                valueAlign = 'start',
                className,
                ...rest
            },
            ref,
        ) => {
            const min = 0;
            const max = 100;
            const normalizedValue = Math.max(Math.min(value, max), min);

            const hasLabel = labelPlacement !== 'none' && (Boolean(label) || Boolean(labelIcon));

            const labelToValuePlacement = { left: 'right', top: 'top' } as const;

            const resolvedValuePlacement = hasLabel ? labelToValuePlacement[labelPlacement] : valuePlacement;

            const isLabelTop = hasLabel && labelPlacement === 'top';
            const isLabelLeft = hasLabel && labelPlacement === 'left';

            const effectiveHasValue = displayValue !== undefined ? displayValue : hasValue;
            const showValue = effectiveHasValue && valuePlacement !== 'none';
            const isValueTop = showValue && resolvedValuePlacement === 'top';
            const isValueRight = showValue && resolvedValuePlacement === 'right';

            const showTopRow = isLabelTop || isValueTop;

            const showValueAlignOnTop = isValueTop && !isLabelTop;

            return (
                <Root
                    ref={ref}
                    view={status || view}
                    size={size}
                    progressSize={progressSize}
                    value={normalizedValue}
                    valuePlacement={resolvedValuePlacement}
                    className={cls(
                        {
                            [classes.labelPlacementLeft]: isLabelLeft,
                            [classes.hasCaption]: Boolean(caption),
                            [classes.valueAlignStart]: showValueAlignOnTop && valueAlign === 'start',
                            [classes.valueAlignCenter]: showValueAlignOnTop && valueAlign === 'center',
                            [classes.valueAlignEnd]: showValueAlignOnTop && valueAlign === 'end',
                        },
                        className,
                    )}
                    {...rest}
                >
                    {showTopRow && (
                        <StyledTopRow>
                            {isLabelTop && (
                                <LabelWrapper
                                    labelIcon={labelIcon}
                                    labelTextPlacement={labelTextPlacement}
                                    label={label}
                                />
                            )}
                            {isValueTop && <StyledValue>{normalizedValue}%</StyledValue>}
                        </StyledTopRow>
                    )}
                    <StyledMidRow>
                        {isLabelLeft && (
                            <LabelWrapper labelIcon={labelIcon} labelTextPlacement={labelTextPlacement} label={label} />
                        )}
                        <StyledTrack>
                            <StyledProgress value={normalizedValue} />
                        </StyledTrack>
                        {isValueRight && <StyledValue>{normalizedValue}%</StyledValue>}
                    </StyledMidRow>
                    {caption && <StyledCaption>{caption}</StyledCaption>}
                </Root>
            );
        },
    );

export const progressConfig = {
    name: 'Progress',
    tag: 'div',
    layout: progressRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        progressSize: {
            css: progressSizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        progressSize: '4',
    },
};
