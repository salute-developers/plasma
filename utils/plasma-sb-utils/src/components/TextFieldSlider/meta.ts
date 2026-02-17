import { disableProps, InSpacingDecorator } from '../../index';

import {
    hintViews,
    hintSizes,
    hintTriggers,
    hintTargetPlacements,
    labelPlacements,
    placements,
    requiredPlacements,
    thousandsGroupStyles,
    thousandSeparators,
    decimalSeparators,
    sliderViews,
    appearances,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/TextFieldSlider',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            id: 'example-text-field-slider',
            appearance: 'default',
            size: 'm',
            view: 'default',
            sliderView: 'default',
            min: 0,
            max: 10000,
            initialValue: 550,
            step: 500,
            thousandSeparator: ' ',
            decimalScale: 3,
            decimalSeparator: '.',
            thousandsGroupStyle: 'thousand',
            fixedDecimalScale: false,
            label: 'Лейбл',
            labelPlacement: 'outer',
            keepPlaceholder: false,
            titleCaption: 'Подпись к полю',
            enableContentLeft: false,
            enableContentRight: false,
            textBefore: '',
            textAfter: '',
            placeholder: 'Заполните поле',
            disabled: false,
            readOnly: false,
            optional: false,
            optionalText: 'опционально',
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: false,
            hasHint: true,
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 'm',
            hintTargetPlacement: 'outer',
            hintPlacement: 'auto',
            hintWidth: '10rem',
            hintHasArrow: true,
            hasScale: true,
            hasPointer: true,
            ...defaultArgs,
        },
        argTypes: {
            appearance: {
                options: appearances,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
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
            initialValue: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            thousandsGroupStyle: {
                options: thousandsGroupStyles,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            thousandSeparator: {
                options: thousandSeparators,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            decimalScale: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            decimalSeparator: {
                options: decimalSeparators,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            fixedDecimalScale: {
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
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: {
                    arg: 'required',
                    truthy: true,
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
            textBefore: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            textAfter: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            placeholder: {
                control: { type: 'text' },
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
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasHint: {
                control: { type: 'boolean' },
                table: { category: 'hint' },
            },
            hintText: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintView: {
                options: hintViews,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintSize: {
                options: hintSizes,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: { type: 'inline-radio' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintTrigger: {
                options: hintTriggers,
                control: { type: 'inline-radio' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintPlacement: {
                options: placements,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                mappers: placements,
                table: { category: 'hint' },
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            hintWidth: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                table: { category: 'hint' },
            },
            sliderView: {
                options: sliderViews,
                control: { type: 'select' },
                table: { category: 'slider' },
            },
            min: {
                control: { type: 'number' },
                table: { category: 'slider' },
            },
            max: {
                control: { type: 'number' },
                table: { category: 'slider' },
            },
            step: {
                control: { type: 'number' },
                table: { category: 'slider' },
            },
            hasScale: {
                control: { type: 'boolean' },
                table: { category: 'slider' },
            },
            hasPointer: {
                control: { type: 'boolean' },
                table: { category: 'slider' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
