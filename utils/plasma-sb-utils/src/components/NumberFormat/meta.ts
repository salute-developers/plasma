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
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'inline-radio' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            readOnly: {
                control: { type: 'boolean' },
            },
            defaultValue: {
                control: { type: 'text' },
            },
            thousandsGroupStyle: {
                options: thousandsGroupStyles,
                control: { type: 'select' },
            },
            thousandSeparator: {
                control: { type: 'text' },
            },
            decimalScale: {
                control: { type: 'number' },
            },
            decimalSeparator: {
                control: { type: 'text' },
            },
            fixedDecimalScale: {
                control: { type: 'boolean' },
            },
            allowNegative: {
                control: { type: 'boolean' },
            },
            allowLeadingZeros: {
                control: { type: 'boolean' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
            },
            required: {
                control: { type: 'boolean' },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
            },
            optional: {
                control: { type: 'boolean' },
                if: {
                    arg: 'required',
                    truthy: false,
                },
            },
            optionalText: {
                control: { type: 'text' },
                if: {
                    arg: 'required',
                    truthy: false,
                },
            },
            label: {
                control: { type: 'text' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'inline-radio' },
            },
            keepPlaceholder: {
                control: { type: 'boolean' },
                if: {
                    arg: 'labelPlacement',
                    eq: 'inner',
                },
            },
            titleCaption: {
                control: { type: 'text' },
            },
            prefix: {
                control: { type: 'text' },
            },
            textBefore: {
                control: { type: 'text' },
            },
            textAfter: {
                control: { type: 'text' },
            },
            suffix: {
                control: { type: 'text' },
            },
            placeholder: {
                control: { type: 'text' },
            },
            leftHelper: {
                control: { type: 'text' },
            },
            clear: {
                control: { type: 'boolean' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                if: {
                    arg: 'clear',
                    truthy: true,
                },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
