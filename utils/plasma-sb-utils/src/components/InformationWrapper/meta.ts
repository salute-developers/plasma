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
        label: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        labelPlacement: {
            options: labelPlacements,
            control: { type: 'select' },
            table: { category: 'layout' },
        },
        titleCaption: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        enableLeftHelperIcon: {
            control: { type: 'boolean' },
            table: { category: 'layout' },
        },
        rightHelper: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        required: {
            control: { type: 'boolean' },
            if: { arg: 'optional', truthy: false },
            table: { category: 'form-related' },
        },
        requiredIndicatorPlacement: {
            options: requiredPlacements,
            control: { type: 'select' },
            if: { arg: 'optional', truthy: false },
            table: { category: 'form-related' },
        },
        hasRequiredIndicator: {
            control: { type: 'boolean' },
            if: { arg: 'optional', truthy: false },
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
        hasHint: {
            control: { type: 'boolean' },
            table: { category: 'hint' },
        },
        hintText: {
            control: { type: 'text' },
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
        hintTrigger: {
            options: hintTriggers,
            control: { type: 'inline-radio' },
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
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
