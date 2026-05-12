import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, labelTextPlacements, progressTrackSizes, valueAligns, valuePlacements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['labelIcon', 'status'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Overlay/Progress',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            value: 25,
            view: 'default',
            size: 'm',
            progressSize: '4',
            hasValue: true,
            label: 'Лейбл',
            hasLabelIcon: true,
            labelTextPlacement: 'right',
            labelPlacement: 'top',
            valuePlacement: 'right',
            valueAlign: 'start',
            showValueAlign: false,
            caption: 'Подпись',
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
            progressSize: {
                options: progressTrackSizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            hasValue: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            value: {
                control: {
                    type: 'range',
                    min: 0,
                    max: 100,
                    step: 1,
                },
                table: { category: 'progress' },
            },
            label: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            hasLabelIcon: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            labelTextPlacement: {
                options: labelTextPlacements,
                control: { type: 'select' },
                table: { category: 'layout' },
                if: { arg: 'hasLabelIcon', truthy: true },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            valuePlacement: {
                options: valuePlacements,
                control: { type: 'select' },
                table: { category: 'layout' },
                if: { arg: 'hasValue', truthy: true },
            },
            showValueAlign: {
                table: { disable: true },
            },
            valueAlign: {
                options: valueAligns,
                control: { type: 'select' },
                table: { category: 'layout' },
                if: { arg: 'showValueAlign', truthy: true },
            },
            caption: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
