import React from 'react';

import { classes, privateTokens } from '../Rating.tokens';
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
} from '../../_Icon';
import type { RatingProps } from '../Rating.types';
import { Star } from '../Rating.styles';

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

type GetIconsArgs = {
    innerValue: string;
} & Pick<RatingProps, 'size' | 'iconQuantity' | 'iconSlot' | 'iconSlotOutline' | 'iconSlotHalf'>;

export const getIcons = ({
    innerValue,
    size,
    iconQuantity = 5,
    iconSlot,
    iconSlotOutline,
    iconSlotHalf,
}: GetIconsArgs) => {
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
