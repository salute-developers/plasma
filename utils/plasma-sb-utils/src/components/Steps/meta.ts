import React, { useEffect } from 'react';
import { useArgs } from 'storybook/preview-api';

import { disableProps, InSpacingDecorator, exampleOnly } from '../../index';

import {
    itemViews,
    indicatorSizePresets,
    orientations,
    contentAligns,
    indicatorTypes,
    hasContentOptions,
    getIndicatorSizePreset,
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
        decorators: [
            (Story: any, context: any) => {
                const [, updateArgs] = useArgs();
                const preset = getIndicatorSizePreset(context.args.simple, context.args.indicatorType);

                useEffect(() => {
                    if (context.args.indicatorSizePreset !== preset) {
                        updateArgs({ indicatorSizePreset: preset });
                    }
                }, [preset]);

                return React.createElement(Story);
            },
            InSpacingDecorator,
        ],
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
            indicatorSizePreset: 'marker',
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
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            disabled: {
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
            title: {
                control: { type: 'text' },
            },
            content: {
                control: { type: 'text' },
            },
            hasContent: {
                options: hasContentOptions,
                control: { type: 'select' },
            },
            ...exampleOnly({
                applyCustomCompletedItemView: {
                    control: { type: 'boolean' },
                },
                loading: {
                    control: { type: 'boolean' },
                },
                maxWidth: {
                    control: { type: 'text' },
                },
                quantity: {
                    control: { type: 'number' },
                },
                indicatorType: {
                    options: indicatorTypes,
                    control: { type: 'select' },
                },
                indicatorSizeSimpleBullet: {
                    name: 'indicatorSize',
                    options: indicatorSizePresets['simple-bullet'],
                    control: { type: 'select' },
                    if: { arg: 'indicatorSizePreset', eq: 'simple-bullet' },
                },
                indicatorSizeSimpleMarker: {
                    name: 'indicatorSize',
                    options: indicatorSizePresets['simple-marker'],
                    control: { type: 'select' },
                    if: { arg: 'indicatorSizePreset', eq: 'simple-marker' },
                },
                indicatorSizeBullet: {
                    name: 'indicatorSize',
                    options: indicatorSizePresets.bullet,
                    control: { type: 'select' },
                    if: { arg: 'indicatorSizePreset', eq: 'bullet' },
                },
                indicatorSizeMarker: {
                    name: 'indicatorSize',
                    options: indicatorSizePresets.marker,
                    control: { type: 'select' },
                    if: { arg: 'indicatorSizePreset', eq: 'marker' },
                },
                indicatorSizePreset: {
                    control: false,
                    table: { disable: true },
                },
                simple: {
                    control: { type: 'boolean' },
                },
            }),
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
