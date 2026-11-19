import { disableProps, exampleOnly, InSpacingDecorator } from '../../index';

import { childKinds } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const variationKeys = (variation?: object) => Object.keys(variation || {}).filter((key) => key !== 'css');

export const createMeta = ({
    component,
    componentConfig,
    title = 'Layout/Group',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        stretching: 'auto',
        itemsCount: 3,
        childKind: 'button',
        ...defaultArgs,
    },
    argTypes: {
        orientation: {
            options: variationKeys(componentConfig.variations?.orientation),
            control: { type: 'inline-radio' },
        },
        gap: {
            options: variationKeys(componentConfig.variations?.gap),
            control: { type: 'select' },
        },
        shape: {
            options: variationKeys(componentConfig.variations?.shape),
            control: { type: 'select' },
        },
        stretching: {
            options: variationKeys(componentConfig.variations?.stretching),
            control: { type: 'select' },
        },
        ...exampleOnly({
            childKind: {
                options: childKinds,
                control: { type: 'select' },
            },
            itemsCount: {
                control: { type: 'number' },
            },
        }),
        ...additionalArgTypes,
        ...disableProps(disablePropsList),
    },
});
