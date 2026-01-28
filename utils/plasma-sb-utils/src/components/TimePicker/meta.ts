import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, columnsQuantities, dropdownAligns, dropdownWidths, requiredPlacements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonArgs = {
    view: 'default',
    size: 'l',
    columnsQuantity: 3,
    label: 'Лейбл',
    labelPlacement: 'outer',
    placeholder: '00:00:00',
    textBefore: '',
    textAfter: '',
    enableContentLeft: true,
    enableContentRight: true,
    dropdownAlign: 'left',
    dropdownWidth: 'fixed',
    dropdownHeight: '30rem',
    stretched: false,
    required: false,
    requiredPlacement: 'right',
    hasRequiredIndicator: false,
    disabled: false,
    readonly: false,
};

const getCommonArgTypes = (componentConfig: any, additionalArgTypes: any = {}) => ({
    view: {
        options: componentConfig.views,
        control: {
            type: 'select',
        },
    },
    size: {
        options: componentConfig.sizes,
        control: {
            type: 'select',
        },
    },
    labelPlacement: {
        options: labelPlacements,
        control: {
            type: 'select',
        },
    },
    columnsQuantity: {
        options: columnsQuantities,
        control: {
            type: 'select',
        },
    },
    dropdownAlign: {
        options: dropdownAligns,
        control: {
            type: 'select',
        },
    },
    dropdownWidth: {
        options: dropdownWidths,
        control: {
            type: 'select',
        },
    },
    requiredPlacement: {
        options: requiredPlacements,
        control: {
            type: 'select',
        },
        if: { arg: 'required', truthy: true },
    },
    hasRequiredIndicator: {
        control: {
            type: 'boolean',
        },
        if: {
            arg: 'required',
            truthy: true,
        },
    },
    ...additionalArgTypes,
});

const commonDisabledArgs = ['view', 'contentLeft', 'contentRight', 'onToggle'];

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
            ...commonArgs,
            ...defaultArgs,
        },
        argTypes: {
            ...getCommonArgTypes(componentConfig, additionalArgTypes),
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
