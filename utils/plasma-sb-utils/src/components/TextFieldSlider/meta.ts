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
            enableScaleTicks: false,
            hasPointer: true,
            ...defaultArgs,
        },
        argTypes: {
            appearance: {
                options: appearances,
                control: { type: 'select' },
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
            initialValue: {
                control: { type: 'number' },
            },
            thousandsGroupStyle: {
                options: thousandsGroupStyles,
                control: { type: 'select' },
            },
            thousandSeparator: {
                options: thousandSeparators,
                control: { type: 'select' },
            },
            decimalScale: {
                control: { type: 'number' },
            },
            decimalSeparator: {
                options: decimalSeparators,
                control: { type: 'select' },
            },
            fixedDecimalScale: {
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
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: {
                    arg: 'required',
                    truthy: true,
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
            textBefore: {
                control: { type: 'text' },
            },
            textAfter: {
                control: { type: 'text' },
            },
            placeholder: {
                control: { type: 'text' },
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
            enableContentLeft: {
                control: { type: 'boolean' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
            },
            hasHint: {
                control: { type: 'boolean' },
            },
            hintText: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintView: {
                options: hintViews,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintSize: {
                options: hintSizes,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: { type: 'inline-radio' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTrigger: {
                options: hintTriggers,
                control: { type: 'inline-radio' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintPlacement: {
                options: placements,
                control: { type: 'select' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                mappers: placements,
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintWidth: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            sliderView: {
                options: sliderViews,
                control: { type: 'select' },
            },
            min: {
                control: { type: 'number' },
            },
            max: {
                control: { type: 'number' },
            },
            step: {
                control: { type: 'number' },
            },
            hasScale: {
                control: { type: 'boolean' },
            },
            enableScaleTicks: {
                control: { type: 'boolean' },
            },
            hasPointer: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
