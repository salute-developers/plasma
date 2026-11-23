import { IconArrowRight, IconDisclosureRight, IconPlasma } from '@salutejs/plasma-icons';
import { component, rangeConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { ChangeEvent, useState } from 'react';

const Range = component(mergeConfig(rangeConfig as any, {}));

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

const getIconSize = (size?: string) => (size === 'xs' ? 'xs' : 's');

// `view`, `size`, `hintView`, `hintSize` — вариации компонента, приходят из панели.
const RangeDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'leftHelper',
            value: 'Подсказка к полю',
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'firstPlaceholder',
            value: 'Заполните поле 1',
        },
        {
            name: 'secondPlaceholder',
            value: 'Заполните поле 2',
        },
        {
            name: 'firstInputView',
            value: 'default',
            items: toItems(['default', 'positive', 'negative', 'edited']),
        },
        {
            name: 'secondInputView',
            value: 'default',
            items: toItems(['default', 'positive', 'negative', 'edited']),
        },
        {
            name: 'dividerVariant',
            value: 'dash',
            items: toItems(['dash', 'icon', 'none']),
        },
        {
            name: 'firstTextfieldTextBefore',
            value: 'С',
        },
        {
            name: 'secondTextfieldTextBefore',
            value: 'ПО',
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
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: true,
        },
        {
            name: 'enableFirstTextfieldContentLeft',
            value: false,
        },
        {
            name: 'enableFirstTextfieldContentRight',
            value: false,
        },
        {
            name: 'enableSecondTextfieldContentLeft',
            value: false,
        },
        {
            name: 'enableSecondTextfieldContentRight',
            value: false,
        },
        {
            name: 'required',
            value: false,
        },
        {
            name: 'hasRequiredIndicator',
            value: false,
        },
        {
            name: 'requiredIndicatorPlacement',
            value: 'right',
            items: toItems(['left', 'right']),
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
    ],
    render: function Story(args: any) {
        const [firstValue, setFirstValue] = useState('');
        const [secondValue, setSecondValue] = useState('');
        const {
            firstInputView,
            secondInputView,
            dividerVariant,
            firstTextfieldTextBefore,
            secondTextfieldTextBefore,
            enableContentLeft,
            enableContentRight,
            enableFirstTextfieldContentLeft,
            enableFirstTextfieldContentRight,
            enableSecondTextfieldContentLeft,
            enableSecondTextfieldContentRight,
            required,
            hasRequiredIndicator,
            hasHint,
            hintText,
            hintTrigger,
            hintTargetPlacement,
            hintPlacement,
            hintWidth,
            hintHasArrow,
            ...rest
        } = args;

        const iconSize = getIconSize(rest.size);
        const icon = <IconPlasma color="inherit" size={iconSize} />;
        const showDefaultTextBefore = dividerVariant === 'none';

        const hintProps = hasHint
            ? { hintText, hintTrigger, hintTargetPlacement, hintPlacement, hintWidth, hintHasArrow }
            : {};

        return (
            <Range
                {...rest}
                {...hintProps}
                required={required}
                hasRequiredIndicator={required && hasRequiredIndicator}
                firstValue={firstValue}
                secondValue={secondValue}
                contentLeft={enableContentLeft ? icon : undefined}
                contentRight={enableContentRight ? <IconDisclosureRight color="inherit" size={iconSize} /> : undefined}
                firstTextfieldContentLeft={enableFirstTextfieldContentLeft ? icon : undefined}
                firstTextfieldContentRight={enableFirstTextfieldContentRight ? icon : undefined}
                secondTextfieldContentLeft={enableSecondTextfieldContentLeft ? icon : undefined}
                secondTextfieldContentRight={enableSecondTextfieldContentRight ? icon : undefined}
                firstTextfieldTextBefore={
                    showDefaultTextBefore ? firstTextfieldTextBefore || 'С' : firstTextfieldTextBefore
                }
                secondTextfieldTextBefore={
                    showDefaultTextBefore ? secondTextfieldTextBefore || 'ПО' : secondTextfieldTextBefore
                }
                dividerVariant={dividerVariant}
                dividerIcon={dividerVariant === 'icon' ? <IconArrowRight color="inherit" size={iconSize} /> : null}
                firstValueSuccess={firstInputView === 'positive'}
                secondValueSuccess={secondInputView === 'positive'}
                firstValueError={firstInputView === 'negative'}
                secondValueError={secondInputView === 'negative'}
                firstValueEdited={firstInputView === 'edited'}
                secondValueEdited={secondInputView === 'edited'}
                onChangeFirstValue={(event: ChangeEvent<HTMLInputElement>) => setFirstValue(event.target.value)}
                onChangeSecondValue={(event: ChangeEvent<HTMLInputElement>) => setSecondValue(event.target.value)}
            />
        );
    },
};

export const RangeStories = [RangeDefault];
