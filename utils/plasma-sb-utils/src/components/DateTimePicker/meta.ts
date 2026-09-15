import { disableProps, InSpacingDecorator } from '../../index';

import {
    appearances,
    labelPlacements,
    requiredPlacements,
    shortcutsPlacements,
    dateFormats,
    timeFormats,
    hintViews,
    hintSizes,
    hintTriggers,
    hintTargetPlacements,
    placements,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'contentLeft',
    'contentRight',
    'opened',
    'onToggle',
    'onChangeValue',
    'onCommitDate',
    'onBlur',
    'onFocus',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/DateTimePicker',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            appearance: 'default',
            hasClearDivider: false,
            label: 'Лейбл',
            titleCaption: 'Подсказка к полю сверху справа',
            leftHelper: 'Подсказка к полю',
            placeholder: '30.05.2024 00:00:00',
            size: 'l',
            view: 'default',
            isDouble: false,
            labelPlacement: 'outer',
            preserveInvalidOnBlur: false,
            defaultDate: new Date(2024, 11, 14),
            renderFromDate: new Date(2024, 11, 14),
            includeEdgeDates: true,
            min: new Date(2024, 1, 1, 12, 12, 12),
            max: new Date(2024, 11, 29),
            maskWithFormat: true,
            hasShortcuts: true,
            dateShortcutsWidth: '11.5rem',
            dateShortcutsPlacement: 'left',
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: false,
            disabled: false,
            readOnly: false,
            textBefore: '',
            enableContentLeft: true,
            enableContentRight: false,
            valueError: false,
            valueSuccess: false,
            lang: 'ru',
            dateFormat: 'DD.MM.YYYY',
            timeFormat: 'HH:mm:ss',
            calendarContainerWidth: '0',
            calendarContainerHeight: '0',
            stretched: false,
            hasHint: false,
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 'm',
            hintTargetPlacement: 'outer',
            hintPlacement: 'auto',
            hintWidth: '10rem',
            hintHasArrow: true,
            ...defaultArgs,
        },
        argTypes: {
            appearance: {
                options: appearances,
                control: {
                    type: 'select',
                },
            },
            hasClearDivider: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            readOnly: {
                control: { type: 'boolean' },
            },
            valueError: {
                control: { type: 'boolean' },
            },
            valueSuccess: {
                control: { type: 'boolean' },
            },
            label: {
                control: { type: 'text' },
            },
            titleCaption: {
                control: { type: 'text' },
            },
            leftHelper: {
                control: { type: 'text' },
            },
            placeholder: {
                control: { type: 'text' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'select' },
            },
            textBefore: {
                control: { type: 'text' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
            },
            isDouble: {
                control: { type: 'boolean' },
            },
            stretched: {
                control: { type: 'boolean' },
            },
            defaultDate: {
                control: { type: 'date' },
            },
            min: {
                control: { type: 'date' },
            },
            max: {
                control: { type: 'date' },
            },
            includeEdgeDates: {
                control: { type: 'boolean' },
            },
            renderFromDate: {
                control: { type: 'date' },
            },
            lang: {
                options: ['ru', 'en'],
                control: { type: 'select' },
            },
            dateFormat: {
                options: dateFormats,
                control: { type: 'select' },
            },
            timeFormat: {
                options: timeFormats,
                control: { type: 'select' },
            },
            maskWithFormat: {
                control: { type: 'boolean' },
            },
            preserveInvalidOnBlur: {
                control: { type: 'boolean' },
            },
            calendarContainerWidth: {
                control: { type: 'text' },
            },
            calendarContainerHeight: {
                control: { type: 'text' },
            },
            hasShortcuts: {
                control: { type: 'boolean' },
            },
            dateShortcutsWidth: {
                control: { type: 'text' },
                if: { arg: 'hasShortcuts', truthy: true },
            },
            dateShortcutsPlacement: {
                options: shortcutsPlacements,
                control: { type: 'select' },
                if: { arg: 'hasShortcuts', truthy: true },
            },
            required: {
                control: { type: 'boolean' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'required', truthy: true },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
            },
            hasHint: {
                control: { type: 'boolean' },
            },
            hintText: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintView: {
                options: hintViews,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintSize: {
                options: hintSizes,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: { type: 'inline-radio' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintTrigger: {
                options: hintTriggers,
                control: { type: 'inline-radio' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintPlacement: {
                options: placements,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintWidth: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
