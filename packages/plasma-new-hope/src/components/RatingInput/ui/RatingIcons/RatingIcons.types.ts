import type { MutableRefObject } from 'react';

import { RatingInputProps } from '../../RatingInput.types';

export type RatingIconsProps = Pick<
    RatingInputProps,
    'iconSize' | 'iconSlot' | 'iconSlotOutline' | 'renderFractionIcon' | 'getLabelText' | 'name' | 'allowClear'
> & {
    count: number;
    parts: number;
    selected: number | null;
    displayed: number;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    onSelect: (value: number | null) => void;
    onHover: (value: number | null) => void;
};

export type GetIconArgs = Pick<RatingIconsProps, 'parts' | 'iconSlot' | 'iconSlotOutline' | 'renderFractionIcon'> & {
    filledParts: number;
    defaultIcons: {
        fill: JSX.Element;
        outline: JSX.Element;
        half: JSX.Element;
    };
};

export type GetInputsArgs = Pick<
    RatingIconsProps,
    'count' | 'parts' | 'selected' | 'name' | 'allowClear' | 'getLabelText' | 'inputRefs' | 'onSelect' | 'onHover'
> & { index: number };
