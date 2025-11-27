import { disableProps, InSpacingDecorator } from '../../index';

import {
    appearances,
    hintViews,
    hintSizes,
    hintTriggers,
    hintTargetPlacements,
    labelPlacements,
    placements,
    requiredPlacements,
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
    title = 'Data Entry/TextField',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            id: 'example-text-field',
            appearance: 'default',
            hasDivider: false,
            size: 'm',
            view: 'default',
            label: 'Лейбл',
            labelPlacement: 'outer',
            keepPlaceholder: false,
            titleCaption: 'Подпись к полю',
            textBefore: '',
            textAfter: '',
            placeholder: 'Заполните поле',
            leftHelper: 'Подсказка к полю',
            disabled: false,
            readOnly: false,
            enableContentLeft: true,
            enableContentRight: true,
            optional: false,
            optionalText: 'опционально',
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: true,
            hasHint: true,
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
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            appearance: {
                options: appearances,
                control: {
                    type: 'select',
                },
            },
            hasDivider: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'appearance',
                    eq: 'clear',
                },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
            },
            required: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
            },
            hasRequiredIndicator: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'required',
                    truthy: true,
                },
            },
            optional: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'required',
                    truthy: false,
                },
            },
            optionalText: {
                control: {
                    type: 'text',
                },
                if: {
                    arg: 'required',
                    truthy: false,
                },
            },
            maxLength: {
                control: {
                    type: 'number',
                },
            },
            labelPlacement: {
                options: labelPlacements,
                control: {
                    type: 'inline-radio',
                },
            },
            keepPlaceholder: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'labelPlacement',
                    eq: 'inner',
                },
            },
            titleCaption: {
                control: { type: 'text' },
            },
            leftHelper: {
                control: { type: 'text' },
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
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintSize: {
                options: hintSizes,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: {
                    type: 'inline-radio',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTrigger: {
                options: hintTriggers,
                control: {
                    type: 'inline-radio',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintPlacement: {
                options: placements,
                control: {
                    type: 'select',
                },
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
            ...additionalArgTypes,
            ...disableProps([
                'theme',
                'loader',
                'onClick',
                'onFocus',
                'onBlur',
                'outlined',
                'contentLeft',
                'contentRight',
                'shiftLeft',
                'shiftRight',
                'stretch',
                'as',
                'forwardedAs',
                'pin',
                'focused',
                'blur',
                'square',
                ...disablePropsList,
            ]),
        },
    };
};
