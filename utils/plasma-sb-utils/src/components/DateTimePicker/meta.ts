import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, requiredPlacements, shortcutsPlacements, dateFormats, timeFormats } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['contentLeft', 'opened', 'onToggle', 'onChangeValue', 'onCommitDate', 'onBlur', 'onFocus'];

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
            label: 'Лейбл',
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
            valueError: false,
            valueSuccess: false,
            lang: 'ru',
            dateFormat: 'DD.MM.YYYY',
            timeFormat: 'HH:mm:ss',
            calendarContainerWidth: 0,
            calendarContainerHeight: 0,
            stretched: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            readOnly: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            valueError: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            valueSuccess: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            label: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            leftHelper: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            placeholder: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            textBefore: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            isDouble: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            stretched: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            defaultDate: {
                control: { type: 'date' },
                table: { category: 'date-related' },
            },
            min: {
                control: { type: 'date' },
                table: { category: 'date-related' },
            },
            max: {
                control: { type: 'date' },
                table: { category: 'date-related' },
            },
            includeEdgeDates: {
                control: { type: 'boolean' },
                table: { category: 'date-related' },
            },
            renderFromDate: {
                control: { type: 'date' },
                table: { category: 'date-related' },
            },
            lang: {
                options: ['ru', 'en'],
                control: { type: 'select' },
                table: { category: 'date-related' },
            },
            dateFormat: {
                options: dateFormats,
                control: { type: 'select' },
                table: { category: 'date-related' },
            },
            timeFormat: {
                options: timeFormats,
                control: { type: 'select' },
                table: { category: 'date-related' },
            },
            maskWithFormat: {
                control: { type: 'boolean' },
                table: { category: 'date-related' },
            },
            preserveInvalidOnBlur: {
                control: { type: 'boolean' },
                table: { category: 'date-related' },
            },
            calendarContainerWidth: {
                control: { type: 'number' },
                table: { category: 'calendar' },
            },
            calendarContainerHeight: {
                control: { type: 'number' },
                table: { category: 'calendar' },
            },
            hasShortcuts: {
                control: { type: 'boolean' },
                table: { category: 'shortcuts' },
            },
            dateShortcutsWidth: {
                control: { type: 'text' },
                if: { arg: 'hasShortcuts', truthy: true },
                table: { category: 'shortcuts' },
            },
            dateShortcutsPlacement: {
                options: shortcutsPlacements,
                control: { type: 'select' },
                if: { arg: 'hasShortcuts', truthy: true },
                table: { category: 'shortcuts' },
            },
            required: {
                control: { type: 'boolean' },
                table: { category: 'form-related' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'required', truthy: true },
                table: { category: 'form-related' },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
                table: { category: 'form-related' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
