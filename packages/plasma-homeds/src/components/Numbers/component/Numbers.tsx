import React, { forwardRef } from 'react';
import type { RootProps } from '@salutejs/plasma-new-hope/styled-components';

import type { NumbersProps } from './Numbers.types';
import { classes } from './Numbers.tokens';
import {
    base,
    StyledDigits,
    StyledFraction,
    StyledMinus,
    StyledSeparator,
    StyledValue,
    StyledPercent,
    StyledDegree,
} from './Numbers.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { splitValue } from './utils/splitValue';

export const numbersRoot = (Root: RootProps<HTMLSpanElement, Omit<NumbersProps, 'value' | 'unit'>>) =>
    forwardRef<HTMLSpanElement, NumbersProps>(({ value, unit, size, view, ...rest }, ref) => {
        if (!Number.isFinite(value)) {
            return null;
        }

        const { integer, decimal } = splitValue(value);

        const unitSign = {
            degree: <StyledDegree className={classes.unit} role="img" aria-label="°" />,
            percent: <StyledPercent className={classes.unit} role="img" aria-label="%" />,
        };

        return (
            <Root ref={ref} size={size} view={view} {...rest}>
                {value < 0 && <StyledMinus className={classes.minus}>-</StyledMinus>}

                <StyledValue>
                    <StyledDigits>
                        <span className={classes.integer}>{integer}</span>
                        {decimal && (
                            <StyledFraction>
                                <StyledSeparator className={classes.separator}>.</StyledSeparator>
                                <span className={classes.fraction}>{decimal}</span>
                            </StyledFraction>
                        )}
                    </StyledDigits>

                    {unit && unitSign[unit]}
                </StyledValue>
            </Root>
        );
    });

export const numbersConfig = {
    name: 'Numbers',
    tag: 'span',
    layout: numbersRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        size: 'xs',
        view: 'default',
    },
};
