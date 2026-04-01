import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, columnsQuantities, dropdownWidths, requiredPlacements, placements } from './fixtures';

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
            view: 'default',
            size: 'l',
            disabled: false,
            readonly: false,
            label: 'Лейбл',
            labelPlacement: 'outer',
            placeholder: '00:00:00',
            textBefore: '',
            textAfter: '',
            enableContentLeft: true,
            enableContentRight: true,
            stretched: false,
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: false,
            placement: 'bottom-start',
            columnsQuantity: 3,
            dropdownWidth: 'fixed',
            dropdownHeight: '30rem',
            disableFlip: true,
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
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            readonly: {
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
            ...additionalArgTypes,
            ...disableProps(['view', 'contentLeft', 'contentRight', 'onToggle', 'dropdownAlign', ...disablePropsList]),
        },
    };
};
