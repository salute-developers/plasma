import { disableProps, InSpacingDecorator } from '../../index';

import {
    appearances,
    labelPlacements,
    columnsQuantities,
    dropdownWidths,
    requiredPlacements,
    placements,
    hintViews,
    hintSizes,
    hintTriggers,
    hintTargetPlacements,
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
    title = 'Data Entry/TimePicker',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            appearance: 'default',
            hasClearDivider: false,
            view: 'default',
            size: 'l',
            disabled: false,
            readonly: false,
            valueError: false,
            valueSuccess: false,
            label: 'Лейбл',
            labelPlacement: 'outer',
            leftHelper: 'Подсказка к полю',
            placeholder: '00:00:00',
            textBefore: '',
            textAfter: '',
            enableContentLeft: true,
            enableContentRight: true,
            stretched: false,
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
            placement: 'bottom-start',
            columnsQuantity: 3,
            dropdownWidth: 'fixed',
            dropdownHeight: '30rem',
            disableFlip: true,
            min: '',
            max: '',
            ...defaultArgs,
        },
        argTypes: {
            appearance: {
                options: appearances,
                control: {
                    type: 'select',
                },
                table: { category: 'variation' },
            },
            hasClearDivider: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
                table: { category: 'variation' },
            },
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
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            readonly: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            valueError: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            valueSuccess: {
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
            leftHelper: {
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
            stretched: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            required: {
                control: { type: 'boolean' },
                table: { category: 'form-related' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'required', truthy: true },
                table: { category: 'form-related' },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
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
            placement: {
                options: placements,
                control: { type: 'select' },
                table: { category: 'dropdown' },
            },
            columnsQuantity: {
                options: columnsQuantities,
                control: { type: 'select' },
                table: { category: 'dropdown' },
            },
            dropdownWidth: {
                options: dropdownWidths,
                control: { type: 'select' },
                table: { category: 'dropdown' },
            },
            dropdownHeight: {
                control: { type: 'text' },
                table: { category: 'dropdown' },
            },
            disableFlip: {
                control: { type: 'boolean' },
                table: { category: 'dropdown' },
            },
            min: {
                control: { type: 'text' },
                table: { category: 'time-constraints' },
            },
            max: {
                control: { type: 'text' },
                table: { category: 'time-constraints' },
            },
            ...additionalArgTypes,
            ...disableProps(['view', 'contentLeft', 'contentRight', 'onToggle', 'dropdownAlign', ...disablePropsList]),
        },
    };
};
