import React from 'react';
import { IconKeyFill, IconKeyOutline, IconLockFill } from '@salutejs/plasma-icons';

const customIconSizingClass = 'rating-custom-icon-sizing';

export type RatingCustomIcons = {
    iconSlot: React.ReactNode;
    iconSlotOutline: React.ReactNode;
    iconSlotHalf: React.ReactNode;
};

const defaultCustomIcons: RatingCustomIcons = {
    iconSlot: <IconKeyFill size="s" className={customIconSizingClass} />,
    iconSlotOutline: <IconLockFill size="s" className={customIconSizingClass} />,
    iconSlotHalf: <IconKeyOutline size="s" className={customIconSizingClass} />,
};

export const createDefaultStory = (Rating: any) => {
    return ({ hasIcons, hasValue, ...rest }: any) => (
        <Rating hasIcons={hasValue ? hasIcons : true} hasValue={hasValue} {...rest} />
    );
};

export const createCustomIconsStory = (Rating: any, customIcons: RatingCustomIcons = defaultCustomIcons) => {
    return ({ hasIcons, hasValue, ...rest }: any) => (
        <Rating
            hasIcons={hasValue ? hasIcons : true}
            hasValue={hasValue}
            iconSlot={customIcons.iconSlot}
            iconSlotOutline={customIcons.iconSlotOutline}
            iconSlotHalf={customIcons.iconSlotHalf}
            {...rest}
        />
    );
};
