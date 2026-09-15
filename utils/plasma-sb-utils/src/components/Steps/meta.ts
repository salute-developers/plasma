import { disableProps, InSpacingDecorator } from '../../index';

import { itemViews, orientations, contentAligns, indicatorTypes, hasContentOptions } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['items', 'onChange', 'hasLoader'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Steps',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        args: {
            view: 'default',
            itemView: 'default',
            size: 'm',
            maxWidth: '100%',
            quantity: 6,
            title: 'Title',
            content: 'Content',
            contentAlign: 'left',
            indicatorType: 'numbered',
            orientation: 'horizontal',
            hasLine: true,
            hasContent: 'all',
            disabled: false,
            loading: false,
            simple: false,
            applyCustomCompletedItemView: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            itemView: {
                options: itemViews,
                control: { type: 'select' },
            },
            applyCustomCompletedItemView: {
                control: { type: 'boolean' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            loading: {
                control: { type: 'boolean' },
            },
            orientation: {
                options: orientations,
                control: { type: 'select' },
            },
            contentAlign: {
                options: contentAligns,
                control: { type: 'select' },
                if: { arg: 'orientation', eq: 'horizontal' },
            },
            hasLine: {
                control: { type: 'boolean' },
            },
            maxWidth: {
                control: { type: 'text' },
            },
            quantity: {
                control: { type: 'number' },
            },
            title: {
                control: { type: 'text' },
            },
            content: {
                control: { type: 'text' },
            },
            indicatorType: {
                options: indicatorTypes,
                control: { type: 'select' },
            },
            hasContent: {
                options: hasContentOptions,
                control: { type: 'select' },
            },
            simple: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
