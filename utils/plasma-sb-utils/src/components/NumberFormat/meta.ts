import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, requiredPlacements, thousandsGroupStyles } from './fixtures';

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
    'enumerationType',
    'onChange',
    'onFocus',
    'onBlur',
    'onSearch',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/NumberFormat',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            defaultValue: '',
            thousandSeparator: ' ',
            decimalScale: 3,
            decimalSeparator: '.',
            thousandsGroupStyle: 'thousand',
            fixedDecimalScale: false,
            allowNegative: true,
            allowLeadingZeros: false,
            size: 'l',
            view: 'default',
            label: 'Лейбл',
            labelPlacement: 'outer',
            keepPlaceholder: false,
            titleCaption: 'Подпись к полю',
            textBefore: '',
            textAfter: '₽',
            placeholder: 'Заполните поле',
            leftHelper: 'Подсказка к полю',
            disabled: false,
            readOnly: false,
            optional: false,
            optionalText: 'опционально',
            required: false,
            requiredPlacement: 'right',
            clear: false,
            hasDivider: false,
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
                control: { type: 'inline-radio' },
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
            defaultValue: {
                control: { type: 'text' },
                table: { category: 'value-related' },
            },
            thousandsGroupStyle: {
                options: thousandsGroupStyles,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            thousandSeparator: {
                control: { type: 'text' },
                table: { category: 'value-related' },
            },
            decimalScale: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            decimalSeparator: {
                control: { type: 'text' },
                table: { category: 'value-related' },
            },
            fixedDecimalScale: {
                control: { type: 'boolean' },
                table: { category: 'value-related' },
            },
            allowNegative: {
                control: { type: 'boolean' },
                table: { category: 'value-related' },
            },
            allowLeadingZeros: {
                control: { type: 'boolean' },
                table: { category: 'value-related' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
                table: { category: 'form-related' },
            },
            required: {
                control: { type: 'boolean' },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
                table: { category: 'form-related' },
            },
            optional: {
                control: { type: 'boolean' },
                if: {
                    arg: 'required',
                    truthy: false,
                },
                table: { category: 'form-related' },
            },
            optionalText: {
                control: { type: 'text' },
                if: {
                    arg: 'required',
                    truthy: false,
                },
                table: { category: 'layout' },
            },
            label: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'inline-radio' },
                table: { category: 'layout' },
            },
            keepPlaceholder: {
                control: { type: 'boolean' },
                if: {
                    arg: 'labelPlacement',
                    eq: 'inner',
                },
                table: { category: 'layout' },
            },
            titleCaption: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            prefix: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            textBefore: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            textAfter: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            suffix: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            placeholder: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            leftHelper: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            clear: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                if: {
                    arg: 'clear',
                    truthy: true,
                },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
