import React, { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { IconKeyFill, IconLockFill } from '@salutejs/plasma-icons';

import { ratingLabels } from './fixtures';

const onChange = action('onChange');
const onHoverChange = action('onHoverChange');

const renderFractionIcon = (filled: number, parts: number) => (
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {filled}/{parts}
    </span>
);

export const createDefaultStory = (RatingInput: any) => {
    return ({
        controlled,
        customIcons,
        customFractionIcons,
        hoverFeedback,
        value,
        defaultValue,
        onChange: onChangeProp = onChange,
        onHoverChange: onHoverChangeProp = onHoverChange,
        ...rest
    }: any) => {
        const [innerValue, setInnerValue] = useState<number | null>(value ?? null);
        const [hover, setHover] = useState<number | null>(null);

        useEffect(() => {
            setInnerValue(value ?? null);
        }, [value, controlled]);

        useEffect(() => {
            setHover(null);
        }, [defaultValue, controlled]);

        const renderValue = (selected: number | null) => {
            const displayed = hover ?? selected;
            return ratingLabels[Math.ceil(displayed ?? 0)] ?? displayed;
        };
        const getLabelText = (candidate: number) => {
            const description = ratingLabels[Math.ceil(candidate)];
            return `${candidate} из ${rest.iconQuantity}${description ? ` — ${description}` : ''}`;
        };

        return (
            <RatingInput
                {...rest}
                key={`${controlled}-${defaultValue}`}
                defaultValue={defaultValue}
                value={controlled ? innerValue : undefined}
                onChange={(next: number | null) => {
                    setInnerValue(next);
                    onChangeProp(next);
                }}
                onHoverChange={(next: number | null) => {
                    setHover(next);
                    onHoverChangeProp(next);
                }}
                renderValue={hoverFeedback ? renderValue : rest.renderValue}
                getLabelText={hoverFeedback ? getLabelText : rest.getLabelText}
                iconSlot={customIcons ? <IconKeyFill color="inherit" /> : rest.iconSlot}
                iconSlotOutline={customIcons ? <IconLockFill color="inherit" /> : rest.iconSlotOutline}
                renderFractionIcon={customFractionIcons ? renderFractionIcon : rest.renderFractionIcon}
            />
        );
    };
};
