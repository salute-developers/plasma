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
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
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
            leftHelper: 'Подсказка к полю слева',
            rightHelper: 'Подсказка к полю справа',
            disabled: false,
            readOnly: false,
            enableContentLeft: true,
            enableContentRight: true,
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
            appearance: {
                options: appearances,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                if: {
                    arg: 'appearance',
                    eq: 'clear',
                },
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
            label: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            placeholder: {
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
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            maxLength: {
                control: { type: 'number' },
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
            leftHelper: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            hasHint: {
                control: { type: 'boolean' },
                table: { category: 'hint' },
            },
            rightHelper: {
                control: { type: 'text' },
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
