import { disableProps } from '../../index';

import { segmentItemViews, orientations, contentLeftOptions, contentRightOptions } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
    decorators?: any[];
    useSegment: () => {
        selectedSegmentItems: string[];
    };
    customGetContentLeft?: (contentLeftOption: string, size: string) => JSX.Element | undefined;
    customGetContentRight?: (
        contentRightOption: string,
        size: string,
        segmentItemView?: string | undefined,
        isSelected?: boolean | undefined,
    ) => JSX.Element | 'Text' | undefined;
};

const commonArgs = {
    size: 's',
    itemQuantity: 5,
    segmentItemView: 'default',
    pilled: false,
    filledBackground: false,
    hasBackground: false,
    disabled: false,
    stretch: false,
    maxItemWidth: '',
    singleSelectedRequired: false,
    orientation: 'horizontal',
    contentRight: 'counter',
    contentLeft: 'icon',
};

const getCommonArgTypes = (componentConfig: any, additionalArgTypes: any = {}) => ({
    stretch: {
        control: {
            type: 'boolean',
        },
        if: { arg: 'orientation', eq: 'horizontal' },
    },
    maxItemWidth: {
        control: {
            type: 'text',
        },
        if: { arg: 'stretch', truthy: false },
    },
    orientation: {
        options: orientations,
        control: {
            type: 'select',
        },
    },
    segmentItemView: {
        options: segmentItemViews,
        control: {
            type: 'select',
        },
    },
    contentLeft: {
        options: contentLeftOptions,
        control: {
            type: 'select',
        },
    },
    contentRight: {
        options: contentRightOptions,
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
    ...additionalArgTypes,
});

const commonDisabledArgs = ['filledBackground', 'view', 'selectionMode', 'clip'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Segment',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
    decorators = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators,
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
