import { disableProps, InSpacingDecorator } from '../../index';

import {
    itemViews,
    orientations,
    contentAligns,
    indicatorTypes,
    hasContentOptions,
    completedItemViews,
} from './fixtures';

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
            apllyCustomCompletedItemView: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            itemView: {
                options: itemViews,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            apllyCustomCompletedItemView: {
                control: { type: 'boolean' },
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
            loading: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            orientation: {
                options: orientations,
                control: { type: 'inline-radio' },
                table: { category: 'layout' },
            },
            contentAlign: {
                options: contentAligns,
                control: { type: 'inline-radio' },
                if: { arg: 'orientation', eq: 'horizontal' },
                table: { category: 'layout' },
            },
            hasLine: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            maxWidth: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            quantity: {
                control: { type: 'number' },
                table: { category: 'content' },
            },
            title: {
                control: { type: 'text' },
                table: { category: 'content' },
            },
            content: {
                control: { type: 'text' },
                table: { category: 'content' },
            },
            indicatorType: {
                options: indicatorTypes,
                control: { type: 'inline-radio' },
                table: { category: 'content' },
            },
            hasContent: {
                options: hasContentOptions,
                control: { type: 'inline-radio' },
                table: { category: 'content' },
            },
            simple: {
                control: { type: 'boolean' },
                table: { category: 'content' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
