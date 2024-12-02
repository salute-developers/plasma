import React, { forwardRef, useEffect } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { RatingProps } from './Rating.types';
import { base, Content, HelperText, Score, StarsWrapper, Wrapper } from './Rating.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { getHelperTextPlacement, getInnerValue, helperTextPlacements } from './utils';
import { classes } from './Rating.tokens';
import { getIcons } from './utils/getIcons';

export const ratingRoot = (Root: RootProps<HTMLDivElement, RatingProps>) =>
    forwardRef<HTMLInputElement, RatingProps>(
        (
            {
                value,
                hasValue = true,
                precision = 1,
                valuePlacement,

                iconSlot,
                iconSlotOutline,
                iconSlotHalf,
                hasIcons = true,
                iconQuantity = 5,

                helperText,
                size,
                view,
                ...rest
            },
            ref,
        ) => {
            const innerValue = getInnerValue(value, precision);

            useEffect(() => {
                if (!hasValue && !hasIcons) {
                    // eslint-disable-next-line no-console
                    console.error("Rating should have at least one of 'hasValue' or 'hasIcons' props");
                }
            }, [hasValue, hasIcons]);

            // INFO: Если выключено отображение иконок и значения, нет смысла показывать только helperText
            if (!hasValue && !hasIcons) {
                return null;
            }

            return (
                <Root ref={ref} view={view} size={size} {...rest}>
                    <Content
                        className={cx(
                            valuePlacement === 'after' && classes.valueAfter,
                            iconQuantity === 1 && classes.singleIconContent,
                        )}
                    >
                        {hasValue && innerValue && <Score>{innerValue}</Score>}
                        {hasIcons && (
                            <Wrapper>
                                <StarsWrapper>
                                    {getIcons({
                                        innerValue,
                                        size,
                                        iconQuantity,
                                        iconSlot,
                                        iconSlotOutline,
                                        iconSlotHalf,
                                    })}
                                </StarsWrapper>
                                {getHelperTextPlacement(value, size, hasIcons, iconQuantity) ===
                                    helperTextPlacements.inner && <HelperText>{helperText}</HelperText>}
                            </Wrapper>
                        )}
                    </Content>

                    {getHelperTextPlacement(value, size, hasIcons, iconQuantity) === helperTextPlacements.outer && (
                        <HelperText className={classes.helperTextOuter}>{helperText}</HelperText>
                    )}
                </Root>
            );
        },
    );

export const ratingConfig = {
    name: 'Rating',
    tag: 'div',
    layout: ratingRoot,
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
        view: 'default',
        size: 'l',
    },
};
