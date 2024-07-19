import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { formatCurrency } from './utils/formatCurrency';
import { PriceProps } from './Price.types';
import { base, StyledPeriodicity } from './Price.styles';
import { base as viewCSS } from './variations/_view/base';
import { classes } from './Price.tokens';

/**
 * Компонент для отображения цены / стоимости / суммы.
 */
export const priceRoot = (Root: RootProps<HTMLSpanElement, Omit<PriceProps, 'children'>>) =>
    forwardRef<HTMLSpanElement, PriceProps>(
        (
            {
                children,
                locale = 'ru',
                currency = 'rub',
                minimumFractionDigits = 0,
                stroked = false,
                periodicity,
                view,
                className,
                stroke = false,
                ...rest
            },
            outerRootRef,
        ) => {
            const strokedClass = stroked || stroke ? classes.stroked : undefined;

            return (
                <Root view={view} ref={outerRootRef} className={cx(strokedClass, className)} {...rest}>
                    {formatCurrency({ value: children, locale, currency, minimumFractionDigits })}
                    {periodicity && <StyledPeriodicity>{periodicity}</StyledPeriodicity>}
                </Root>
            );
        },
    );

export const priceConfig = {
    name: 'Price',
    tag: 'span',
    layout: priceRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
