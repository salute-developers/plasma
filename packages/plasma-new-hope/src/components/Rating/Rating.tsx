import React, { forwardRef, useEffect, useRef, useState } from 'react';

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
                helperTextStretching = 'filled',
                size,
                view,
                ...rest
            },
            ref,
        ) => {
            const innerValue = getInnerValue(value, precision, iconQuantity);

            const contentRef = useRef<HTMLDivElement>(null);
            const starsWrapperRef = useRef<HTMLDivElement>(null);

            const [helperTextMaxWidth, setHelperTextMaxWidth] = useState('unset');

            useEffect(() => {
                if (!hasValue && !hasIcons) {
                    // eslint-disable-next-line no-console
                    console.error("Rating should have at least one of 'hasValue' or 'hasIcons' props");
                }
            }, [hasValue, hasIcons]);

            useEffect(() => {
                if (helperTextStretching === 'filled') {
                    setHelperTextMaxWidth('unset');
                    return;
                }

                const helpertextPlacement = getHelperTextPlacement(value, size, hasIcons, iconQuantity);

                if (helpertextPlacement === helperTextPlacements.inner) {
                    if (!starsWrapperRef?.current) {
                        setHelperTextMaxWidth('unset');
                        return;
                    }

                    const starsWrapperWidth = starsWrapperRef.current.offsetWidth;
                    setHelperTextMaxWidth(`${starsWrapperWidth}px`);
                } else if (helpertextPlacement === helperTextPlacements.outer) {
                    if (!contentRef?.current) {
                        setHelperTextMaxWidth('unset');
                        return;
                    }

                    const starsWrapperWidth = contentRef.current.offsetWidth;
                    setHelperTextMaxWidth(`${starsWrapperWidth}px`);
                }
            }, [helperTextStretching, helperText, hasValue, hasIcons, precision, value, iconQuantity]);

            // INFO: Если выключено отображение иконок и значения, нет смысла показывать только helperText
            if (!hasValue && !hasIcons) {
                return null;
            }

            return (
                <Root ref={ref} view={view} size={size} {...rest}>
                    <Content
                        ref={contentRef}
                        className={cx(
                            valuePlacement === 'after' && classes.valueAfter,
                            iconQuantity === 1 && classes.singleIconContent,
                        )}
                    >
                        {hasValue && innerValue && <Score>{innerValue}</Score>}
                        {hasIcons && (
                            <Wrapper>
                                <StarsWrapper ref={starsWrapperRef}>
                                    {getIcons({
                                        innerValue,
                                        size,
                                        iconQuantity,
                                        iconSlot,
                                        iconSlotOutline,
                                        iconSlotHalf,
                                    })}
                                </StarsWrapper>
                                {helperText &&
                                    getHelperTextPlacement(value, size, hasIcons, iconQuantity) ===
                                        helperTextPlacements.inner && (
                                        <HelperText style={{ maxWidth: helperTextMaxWidth }}>{helperText}</HelperText>
                                    )}
                            </Wrapper>
                        )}
                    </Content>

                    {helperText &&
                        getHelperTextPlacement(value, size, hasIcons, iconQuantity) === helperTextPlacements.outer && (
                            <HelperText className={classes.helperTextOuter} style={{ maxWidth: helperTextMaxWidth }}>
                                {helperText}
                            </HelperText>
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
