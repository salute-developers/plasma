import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, requiredPlacements, hintViews, hintSizes, hintTriggers, placements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['id', 'labelHtmlFor', 'children', 'leftHelper'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/InformationWrapper',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        size: 'l',
        view: 'default',
        label: 'Лейбл',
        labelPlacement: 'top',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        enableLeftHelperIcon: true,
        rightHelper: 'Подсказка справа',
        required: false,
        hasRequiredIndicator: false,
        requiredIndicatorPlacement: 'right',
        optional: false,
        optionalText: 'optional',
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
        disabled: false,
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
        label: {
            control: { type: 'text' },
        },
        labelPlacement: {
            options: labelPlacements,
            control: { type: 'select' },
        },
        titleCaption: {
            control: { type: 'text' },
        },
        enableLeftHelperIcon: {
            control: { type: 'boolean' },
        },
        rightHelper: {
            control: { type: 'text' },
        },
        required: {
            control: { type: 'boolean' },
            if: { arg: 'optional', truthy: false },
        },
        requiredIndicatorPlacement: {
            options: requiredPlacements,
            control: { type: 'select' },
            if: { arg: 'optional', truthy: false },
        },
        hasRequiredIndicator: {
            control: { type: 'boolean' },
            if: { arg: 'optional', truthy: false },
        },
        optional: {
            control: { type: 'boolean' },
            if: { arg: 'required', truthy: false },
        },
        optionalText: {
            control: { type: 'text' },
            if: { arg: 'required', truthy: false },
        },
        hasHint: {
            control: { type: 'boolean' },
        },
        hintText: {
            control: { type: 'text' },
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
        hintTrigger: {
            options: hintTriggers,
            control: { type: 'inline-radio' },
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
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
