import { disableProps, InSpacingDecorator } from '../../index';

import { defaultItems } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['separator'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Breadcrumbs',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        view: 'default',
        size: 'm',
        showItems: 2,
        items: defaultItems,
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
        showItems: {
            control: { type: 'number' },
            table: { category: 'content' },
        },
        items: {
            control: { type: 'object' },
            table: { category: 'content' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
