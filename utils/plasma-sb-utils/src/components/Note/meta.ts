import { disableProps, InSpacingDecorator } from '../../index';

import { contentBeforeSizes } from './fixtures';

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
            title: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            text: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            stretch: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasClose: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentBefore: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            contentBeforeSizing: {
                options: contentBeforeSizes,
                control: { type: 'select' },
                if: { arg: 'enableContentBefore', truthy: true },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            enableHeightControl: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            height: {
                control: { type: 'text' },
                if: { arg: 'enableHeightControl', truthy: true },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
