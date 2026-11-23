import { IconPlasma } from '@salutejs/plasma-icons';
import { component, mergeConfig, textFieldSliderConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useMemo, useState } from 'react';

const TextFieldSlider = component(mergeConfig(textFieldSliderConfig as any, {}));

const hintPlacements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
];

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const generateScaleTicks = (min: number, max: number, count = 11): number[] =>
    Array.from({ length: count }, (_, i) => Math.round(min + (i / (count - 1)) * (max - min)));

const TextFieldSliderDefault = {
    name: 'Default',
    args: [
        {
            name: 'min',
            value: 0,
        },
        {
            name: 'max',
            value: 10000,
        },
        {
            name: 'initialValue',
            value: 550,
        },
        {
            name: 'step',
            value: 500,
        },
        {
            name: 'thousandSeparator',
            value: ' ',
            items: [
                { value: ' ', label: 'пробел' },
                { value: '/', label: '/' },
                { value: '-', label: '-' },
                { value: '', label: 'без разделителя' },
            ],
        },
        {
            name: 'decimalScale',
            value: 3,
        },
        {
            name: 'decimalSeparator',
            value: '.',
            items: toItems([',', '.']),
        },
        {
            name: 'thousandsGroupStyle',
            value: 'thousand',
            items: toItems(['thousand', 'lakh', 'wan', 'none']),
        },
        {
            name: 'fixedDecimalScale',
            value: false,
        },
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'keepPlaceholder',
            value: false,
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'placeholder',
            value: 'Заполните поле',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '',
        },
        {
            name: 'enableContentLeft',
            value: false,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'readOnly',
            value: false,
        },
        {
            name: 'optional',
            value: false,
        },
        {
            name: 'optionalText',
            value: 'опционально',
        },
        {
            name: 'required',
            value: false,
        },
        {
            name: 'requiredPlacement',
            value: 'right',
            items: toItems(['left', 'right']),
        },
        {
            name: 'hasRequiredIndicator',
            value: false,
        },
        {
            name: 'hasHint',
            value: true,
        },
        {
            name: 'hintText',
            value: 'Текст подсказки',
        },
        {
            name: 'hintTrigger',
            value: 'hover',
            items: toItems(['hover', 'click']),
        },
        {
            name: 'hintTargetPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'hintPlacement',
            value: 'auto',
            items: toItems(hintPlacements),
        },
        {
            name: 'hintWidth',
            value: '10rem',
        },
        {
            name: 'hintHasArrow',
            value: true,
        },
        {
            name: 'hasScale',
            value: true,
        },
        {
            name: 'enableScaleTicks',
            value: false,
        },
        {
            name: 'hasPointer',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const {
            initialValue,
            enableContentLeft,
            enableContentRight,
            enableScaleTicks,
            hasHint,
            hintText,
            hintTrigger,
            hintTargetPlacement,
            hintPlacement,
            hintWidth,
            hintHasArrow,
            titleCaption,
            textBefore,
            textAfter,
            optionalText,
            min,
            max,
            step,
            decimalScale,
            ...rest
        } = args;

        const startValue = Number(initialValue) || 50;
        const [value, setValue] = useState<number | string | undefined>(startValue);

        const minValue = Number(min) || 0;
        const maxValue = Number(max) || 0;

        const scaleTicks = useMemo(() => (enableScaleTicks ? generateScaleTicks(minValue, maxValue) : undefined), [
            enableScaleTicks,
            minValue,
            maxValue,
        ]);

        const hintProps = hasHint
            ? {
                  hintText,
                  hintTrigger,
                  hintTargetPlacement,
                  hintPlacement,
                  hintWidth: hintWidth || undefined,
                  hintHasArrow,
              }
            : {};

        const iconSize = rest.size === 'xs' ? 'xs' : 's';

        const commonProps = {
            ...rest,
            ...hintProps,
            min: minValue,
            max: maxValue,
            step: Number(step) || undefined,
            decimalScale: Number(decimalScale),
            scaleTicks,
            titleCaption: titleCaption || undefined,
            textBefore: textBefore || undefined,
            textAfter: textAfter || undefined,
            optionalText: optionalText || undefined,
            contentLeft: enableContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined,
            contentRight: enableContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined,
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '25rem' }}>
                <TextFieldSlider
                    {...commonProps}
                    value={value}
                    onChange={(_event: unknown, values?: { raw: number | string | undefined }) => setValue(values?.raw)}
                />

                <TextFieldSlider
                    key={startValue}
                    {...commonProps}
                    label="Uncontrolled TextFieldSlider"
                    defaultValue={startValue}
                />
            </div>
        );
    },
};

export const TextFieldSliderStories = [TextFieldSliderDefault];
