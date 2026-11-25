import { IconKeyFill, IconLockFill } from '@salutejs/plasma-icons';
import { component, mergeConfig, ratingInputConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useEffect, useState } from 'react';

const RatingInput = component(mergeConfig(ratingInputConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ratingLabels = ['Без оценки', 'Очень плохо', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

const renderFractionIcon = (filled: number, parts: number) => (
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {filled}/{parts}
    </span>
);

const RatingInputDefault = {
    name: 'Default',
    args: [
        {
            name: 'value',
            value: 3,
        },
        {
            name: 'controlled',
            value: false,
        },
        {
            name: 'hasValue',
            value: true,
        },
        {
            name: 'hasLimitLabels',
            value: false,
        },
        {
            name: 'allowClear',
            value: false,
        },
        {
            name: 'fractions',
            value: 1,
        },
        {
            name: 'iconQuantity',
            value: 5,
        },
        {
            name: 'minLabel',
            value: 'плохо',
        },
        {
            name: 'maxLabel',
            value: 'отлично',
        },
        {
            name: 'limitLabelsPlacement',
            value: 'side',
            items: toItems(['side', 'bottom']),
        },
        {
            name: 'valuePlacement',
            value: 'bottom',
            items: toItems(['top', 'bottom']),
        },
        {
            name: 'valueAlign',
            value: 'center',
            items: toItems(['start', 'center']),
        },
        {
            name: 'customIcons',
            value: false,
        },
        {
            name: 'customFractionIcons',
            value: false,
        },
        {
            name: 'hoverFeedback',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const {
            value,
            controlled,
            fractions,
            iconQuantity,
            customIcons,
            customFractionIcons,
            hoverFeedback,
            ...rest
        } = args;
        const initial = Number(value) || 0;
        const quantity = Math.max(1, Number(iconQuantity) || 1);
        const [innerValue, setInnerValue] = useState<number | null>(initial);
        const [hover, setHover] = useState<number | null>(null);

        useEffect(() => {
            setInnerValue(initial);
        }, [initial, controlled]);

        const renderValue = (selected: number | null) => {
            const displayed = hover ?? selected;
            return ratingLabels[Math.ceil(displayed ?? 0)] ?? displayed;
        };
        const getLabelText = (candidate: number) => {
            const description = ratingLabels[Math.ceil(candidate)];
            return `${candidate} из ${quantity}${description ? ` — ${description}` : ''}`;
        };

        return (
            <RatingInput
                {...rest}
                key={`${controlled}-${initial}`}
                name="rating"
                aria-label="Ваша оценка"
                defaultValue={initial}
                value={controlled ? innerValue : undefined}
                fractions={Math.max(1, Number(fractions) || 1)}
                iconQuantity={quantity}
                onChange={(next: number | null) => setInnerValue(next)}
                onHoverChange={(next: number | null) => setHover(next)}
                renderValue={hoverFeedback ? renderValue : undefined}
                getLabelText={hoverFeedback ? getLabelText : undefined}
                iconSlot={customIcons ? <IconKeyFill color="inherit" /> : undefined}
                iconSlotOutline={customIcons ? <IconLockFill color="inherit" /> : undefined}
                renderFractionIcon={customFractionIcons ? renderFractionIcon : undefined}
            />
        );
    },
};

export const RatingInputStories = [RatingInputDefault];
