import React, { forwardRef, useEffect, useState } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';
import {
    IconStarFill16,
    IconStarFill24,
    IconStarFill36,
    IconStarHalfFill16,
    IconStarHalfFill24,
    IconStarHalfFill36,
    IconStarOutline16,
    IconStarOutline24,
    IconStarOutline36,
} from '../_Icon';

import type { RatingProps } from './Rating.types';
import { base, Content, HelperText, Score, Star, StarsWrapper, Wrapper } from './Rating.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { getHelperTextPlacement, helperTextPlacements, valueConstraints } from './utils';
import { classes, privateTokens } from './Rating.tokens';

export const ratingRoot = (Root: RootProps<HTMLDivElement, RatingProps>) =>
    forwardRef<HTMLInputElement, RatingProps>(
        (
            {
                value,
                precision = 1,
                valuePlacement,

                iconSlot,
                iconSlotOutline,
                iconSlotHalf,
                hasIcons,
                iconQuantity = 5,

                helperText,
                size,
                view,
                ...rest
            },
            ref,
        ) => {
            const [innerValue, setInnerValue] = useState((value && String(value)) || '');

            const iconMap = (componentSize?: string) => {
                const iconProps = {
                    color: 'inherit',
                    sizeCustomProperty: privateTokens.iconSize,
                };

                switch (componentSize) {
                    case 'displayL':
                    case 'displayM':
                    case 'displayS':
                    case 'h1':
                    case 'h2':
                        return {
                            fill: <IconStarFill36 {...iconProps} />,
                            halfFill: <IconStarHalfFill36 {...iconProps} />,
                            outline: <IconStarOutline36 {...iconProps} />,
                        };
                    case 'h3':
                    case 'h4':
                    case 'h5':
                    case 'l':
                    case 'm':
                        return {
                            fill: <IconStarFill24 {...iconProps} />,
                            halfFill: <IconStarHalfFill24 {...iconProps} />,
                            outline: <IconStarOutline24 {...iconProps} />,
                        };
                    case 's':
                    case 'xs':
                    case 'xxs':
                        return {
                            fill: <IconStarFill16 {...iconProps} />,
                            halfFill: <IconStarHalfFill16 {...iconProps} />,
                            outline: <IconStarOutline16 {...iconProps} />,
                        };
                    default:
                        return {
                            fill: <IconStarFill24 {...iconProps} />,
                            halfFill: <IconStarHalfFill24 {...iconProps} />,
                            outline: <IconStarOutline24 {...iconProps} />,
                        };
                }
            };

            const getIcons = () => {
                const { fill, halfFill, outline } = iconMap(size);

                if (iconQuantity === 1) {
                    return <Star className={classes.singleIcon}>{iconSlot || fill}</Star>;
                }

                const scoreScale = iconQuantity / 5;

                const filledIcons = Array.from({ length: Math.floor(Number(innerValue) * scoreScale) }, (_, index) => (
                    <Star key={`filled_${index}_${innerValue}`}>{iconSlot || fill}</Star>
                ));

                if (Number(innerValue) > 0 && !Number.isInteger(Number(innerValue))) {
                    filledIcons.push(<Star key="half-fill">{iconSlotHalf || halfFill}</Star>);
                }

                const outlineIconsLenght = iconQuantity - filledIcons.length;
                const outlineIcons = Array.from({ length: outlineIconsLenght }, (_, index) => (
                    <Star key={`outline_${index}_${innerValue}`} className={classes.iconOutline}>
                        {iconSlotOutline || outline}
                    </Star>
                ));

                return [...filledIcons, ...outlineIcons];
            };

            useEffect(() => {
                if (value === undefined) {
                    setInnerValue('');
                    return;
                }

                let resValue = value;

                if (resValue > valueConstraints.max) {
                    resValue = valueConstraints.max;
                }

                if (resValue < valueConstraints.min) {
                    resValue = valueConstraints.min;
                }

                if (precision !== undefined) {
                    setInnerValue(resValue.toFixed(precision));
                    return;
                }

                setInnerValue(String(resValue));
            }, [value, precision]);

            return (
                <Root ref={ref} view={view} size={size} {...rest}>
                    <Content
                        className={cx(
                            valuePlacement === 'after' && classes.valueAfter,
                            iconQuantity === 1 && classes.singleIconContent,
                        )}
                    >
                        {value !== undefined && <Score>{innerValue}</Score>}
                        {hasIcons && (
                            <Wrapper>
                                <StarsWrapper>{getIcons()}</StarsWrapper>
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
