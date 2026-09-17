import { disableProps, InSpacingDecorator, exampleOnly } from '../../index';

import { contentBeforeSizes, orientations } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['contentBefore', 'onCloseButtonClick'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Note',
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
            title: 'Title',
            text: 'Text',
            width: '400',
            stretch: false,
            enableContentBefore: true,
            contentBeforeSizing: 'fixed',
            hasClose: false,
            enableHeightControl: false,
            height: '400',
            hasActionContent: false,
            orientation: 'vertical',
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            title: {
                control: { type: 'text' },
            },
            text: {
                control: { type: 'text' },
            },
            stretch: {
                control: { type: 'boolean' },
            },
            hasClose: {
                control: { type: 'boolean' },
            },
            contentBeforeSizing: {
                options: contentBeforeSizes,
                control: { type: 'select' },
                if: { arg: 'enableContentBefore', truthy: true },
            },
            width: {
                control: { type: 'text' },
            },
            height: {
                control: { type: 'text' },
                if: { arg: 'enableHeightControl', truthy: true },
            },
            orientation: {
                options: orientations,
                control: { type: 'select' },
            },
            ...exampleOnly({
                enableContentBefore: {
                    control: { type: 'boolean' },
                },
                enableHeightControl: {
                    control: { type: 'boolean' },
                },
                hasActionContent: {
                    control: { type: 'boolean' },
                },
            }),
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
