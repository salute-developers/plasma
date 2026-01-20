import { disableProps, InSpacingDecorator } from '../../index';

import {
    appearances,
    hintViews,
    hintSizes,
    hintTriggers,
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
    title = 'Data Entry/TextArea',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            id: 'example-textarea',
            appearance: 'default',
            hasDivider: false,
            view: 'default',
            size: 's',
            enableContentRight: true,
            enableHeader: false,
            label: 'Лейбл',
            labelPlacement: 'outer',
            placeholder: 'Заполните многострочное поле',
            titleCaption: 'Подпись к полю',
            leftHelper: 'Подсказка к полю слева',
            rightHelper: 'Подсказка к полю справа',
            disabled: false,
            readOnly: false,
            autoResize: false,
            minAuto: 0,
            maxAuto: 0,
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
                defaultValue: 's',
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
            labelPlacement: {
                options: labelPlacements,
                control: {
                    type: 'select',
                },
            },
            titleCaption: {
                control: { type: 'text' },
            },
            leftHelper: {
                control: { type: 'text' },
            },
            rightHelper: {
                control: { type: 'text' },
            },
            autoResize: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            minAuto: {
                control: {
                    type: 'number',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            maxAuto: {
                control: {
                    type: 'number',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            width: {
                control: { type: 'text' },
            },
            height: {
                control: { type: 'text' },
            },
            cols: {
                control: {
                    type: 'number',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            rows: {
                control: {
                    type: 'number',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            enableHeader: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'appearance',
                    neq: 'clear',
                },
            },
            hasHint: {
                control: {
                    type: 'boolean',
                },
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
            hintTrigger: {
                options: hintTriggers,
                control: {
                    type: 'select',
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
                'helperBlock',
                'helperText',
                '$isFocused',
                'contentRight',
                'autoComplete',
                'autoFocus',
                'dirName',
                'form',
                'minLength',
                'maxLength',
                'name',
                'value',
                'wrap',
                'theme',
                'as',
                'forwardedAs',
                'onChange',
                'onFocus',
                'onBlur',
                'leftHelperPlacement',
                'status',
                'hintTargetIcon',
                'hintOffset',
                'hintContentLeft',
                'hintView',
                'hintOpened',
                'headerSlot',
                ...disablePropsList,
            ]),
        },
    };
};
