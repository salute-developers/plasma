import { disableProps, InSpacingDecorator } from '../../index';

import {
    arrowPlacement,
    chipClickArea,
    hintSizes,
    hintTargetPlacements,
    hintTriggers,
    hintViews,
    labelPlacement,
    mode,
    placements,
    variant,
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
    title = 'Data Entry/Combobox',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            label: 'Label',
            labelPlacement: 'outer',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            size: 'm',
            view: 'default',
            enableContentLeft: false,
            isTargetAmount: false,
            targetAmount: undefined,
            variant: 'normal',
            alwaysOpened: false,
            disabled: false,
            readOnly: false,
            optional: false,
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: false,
            hasHint: false,
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 'm',
            hintTargetPlacement: 'outer',
            hintPlacement: 'auto',
            hintWidth: '10rem',
            hintHasArrow: true,
            emptyStateDescription: '',
            mode: 'default',
            treeView: false,
            arrowPlacement: 'left',
            singleLine: true,
            closeAfterSelect: false,
            chipClickArea: 'full',
            ...defaultArgs,
        },
        argTypes: {
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            labelPlacement: {
                options: labelPlacement,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            variant: {
                options: variant,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            listWidth: {
                control: { type: 'text' },
                table: { category: 'dropdown' },
            },
            listMaxHeight: {
                control: { type: 'text' },
                table: { category: 'dropdown' },
            },
            disabled: {
                control: { type: 'boolean' },
                if: { arg: 'alwaysOpened', truthy: false },
                table: { category: 'variation' },
            },
            readOnly: {
                control: { type: 'boolean' },
                if: { arg: 'alwaysOpened', truthy: false },
                table: { category: 'variation' },
            },
            targetAmount: {
                control: { type: 'number' },
                if: { arg: 'isTargetAmount', truthy: true },
                table: { category: 'layout' },
            },
            requiredPlacement: {
                options: ['left', 'right'],
                control: { type: 'select' },
                table: { category: 'form-related' },
            },
            required: {
                control: { type: 'boolean' },
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
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: { type: 'inline-radio' },
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
            emptyStateDescription: {
                control: { type: 'text' },
                table: { category: 'dropdown' },
            },
            mode: {
                options: mode,
                control: { type: 'select' },
                table: { category: 'dropdown' },
            },
            treeView: {
                control: { type: 'boolean' },
                table: { category: 'dropdown' },
            },
            arrowPlacement: {
                options: arrowPlacement,
                control: { type: 'select' },
                if: { arg: 'treeView', truthy: true },
                table: { category: 'dropdown' },
            },
            singleLine: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            closeAfterSelect: {
                control: { type: 'boolean' },
                table: { category: 'dropdown' },
            },
            alwaysOpened: {
                control: { type: 'boolean' },
                table: { category: 'dropdown' },
            },
            chipClickArea: {
                options: chipClickArea,
                control: { type: 'select' },
                table: { category: 'chip' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
