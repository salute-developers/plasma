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
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                defaultValue: 's',
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
                if: { arg: 'appearance', eq: 'clear' },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
                table: { category: 'variation' },
            },
            readOnly: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
                table: { category: 'variation' },
            },

            required: {
                control: { type: 'boolean' },
                if: { arg: 'optional', truthy: false },
                table: { category: 'form-related' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'optional', truthy: false },
                table: { category: 'form-related' },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
                table: { category: 'form-related' },
            },
            optional: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: false },
                table: { category: 'form-related' },
            },
            optionalText: {
                control: { type: 'text' },
                if: { arg: 'required', truthy: false },
                table: { category: 'form-related' },
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
            placeholder: {
                control: { type: 'text' },
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
            rightHelper: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableHeader: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'layout' },
            },

            width: {
                control: { type: 'text' },
                table: { category: 'dimensions' },
            },
            height: {
                control: { type: 'text' },
                table: { category: 'dimensions' },
            },
            rows: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'dimensions' },
            },
            cols: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'dimensions' },
            },
            autoResize: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'dimensions' },
            },
            minAuto: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'dimensions' },
            },
            maxAuto: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
                table: { category: 'dimensions' },
            },

            hasHint: {
                control: { type: 'boolean' },
                table: { category: 'hint' },
            },
            hintText: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },
            hintTrigger: {
                options: hintTriggers,
                control: { type: 'inline-radio' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },
            hintView: {
                options: hintViews,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },
            hintSize: {
                options: hintSizes,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },
            hintPlacement: {
                options: placements,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
                mappers: placements,
                table: { category: 'hint' },
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },
            hintWidth: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
                table: { category: 'hint' },
            },

            ...additionalArgTypes,
            ...disableProps([
                'helperBlock',
                'helperText',
                '$isFocused',
                'focused',
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
                'rightHelperPlacement',
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
