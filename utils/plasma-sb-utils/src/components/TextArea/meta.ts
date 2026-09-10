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
                control: { type: 'select' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            readOnly: {
                control: { type: 'boolean' },
            },

            required: {
                control: { type: 'boolean' },
                if: { arg: 'optional', truthy: false },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'optional', truthy: false },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
            },
            optional: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: false },
            },
            optionalText: {
                control: { type: 'text' },
                if: { arg: 'required', truthy: false },
            },

            label: {
                control: { type: 'text' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'inline-radio' },
            },
            placeholder: {
                control: { type: 'text' },
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
            enableContentRight: {
                control: { type: 'boolean' },
            },
            enableHeader: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', neq: 'clear' },
            },

            width: {
                control: { type: 'text' },
            },
            height: {
                control: { type: 'text' },
            },
            rows: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
            },
            cols: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
            },
            autoResize: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', neq: 'clear' },
            },
            minAuto: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
            },
            maxAuto: {
                control: { type: 'number' },
                if: { arg: 'appearance', neq: 'clear' },
            },

            hasHint: {
                control: { type: 'boolean' },
            },
            hintText: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintTrigger: {
                options: hintTriggers,
                control: { type: 'inline-radio' },
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
            hintPlacement: {
                options: placements,
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
                mappers: placements,
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
