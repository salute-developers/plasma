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
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            labelPlacement: {
                options: labelPlacement,
                control: { type: 'select' },
            },
            variant: {
                options: variant,
                control: { type: 'select' },
            },
            listWidth: {
                control: { type: 'text' },
            },
            listMaxHeight: {
                control: { type: 'text' },
            },
            disabled: {
                control: { type: 'boolean' },
                if: { arg: 'alwaysOpened', truthy: false },
            },
            readOnly: {
                control: { type: 'boolean' },
                if: { arg: 'alwaysOpened', truthy: false },
            },
            targetAmount: {
                control: { type: 'number' },
                if: { arg: 'isTargetAmount', truthy: true },
            },
            requiredPlacement: {
                options: ['left', 'right'],
                control: { type: 'select' },
            },
            required: {
                control: { type: 'boolean' },
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
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: { type: 'inline-radio' },
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
            emptyStateDescription: {
                control: { type: 'text' },
            },
            mode: {
                options: mode,
                control: { type: 'select' },
            },
            treeView: {
                control: { type: 'boolean' },
            },
            arrowPlacement: {
                options: arrowPlacement,
                control: { type: 'select' },
                if: { arg: 'treeView', truthy: true },
            },
            singleLine: {
                control: { type: 'boolean' },
            },
            closeAfterSelect: {
                control: { type: 'boolean' },
            },
            alwaysOpened: {
                control: { type: 'boolean' },
            },
            chipClickArea: {
                options: chipClickArea,
                control: { type: 'select' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
