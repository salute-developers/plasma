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
    multiplicityOptions,
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
            multiplicityMinutes: 1,
            multiplicitySeconds: 1,
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
            },
            hasClearDivider: {
                control: { type: 'boolean' },
                if: { arg: 'appearance', eq: 'clear' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            readonly: {
                control: { type: 'boolean' },
            },
            valueError: {
                control: { type: 'boolean' },
            },
            valueSuccess: {
                control: { type: 'boolean' },
            },
            label: {
                control: { type: 'text' },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'select' },
            },
            leftHelper: {
                control: { type: 'text' },
            },
            placeholder: {
                control: { type: 'text' },
            },
            textBefore: {
                control: { type: 'text' },
            },
            textAfter: {
                control: { type: 'text' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
            },
            stretched: {
                control: { type: 'boolean' },
            },
            required: {
                control: { type: 'boolean' },
            },
            requiredPlacement: {
                options: requiredPlacements,
                control: { type: 'select' },
                if: { arg: 'required', truthy: true },
            },
            hasRequiredIndicator: {
                control: { type: 'boolean' },
                if: { arg: 'required', truthy: true },
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
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintWidth: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            placement: {
                options: placements,
                control: { type: 'select' },
            },
            columnsQuantity: {
                options: columnsQuantities,
                control: { type: 'select' },
            },
            multiplicityMinutes: {
                options: multiplicityOptions,
                control: { type: 'select' },
            },
            multiplicitySeconds: {
                options: multiplicityOptions,
                control: { type: 'select' },
            },
            dropdownWidth: {
                options: dropdownWidths,
                control: { type: 'select' },
            },
            dropdownHeight: {
                control: { type: 'text' },
            },
            disableFlip: {
                control: { type: 'boolean' },
            },
            min: {
                control: { type: 'text' },
            },
            max: {
                control: { type: 'text' },
            },
            ...additionalArgTypes,
            ...disableProps(['view', 'contentLeft', 'contentRight', 'onToggle', 'dropdownAlign', ...disablePropsList]),
        },
    };
};
