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
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            progressSize: {
                options: progressTrackSizes,
                control: { type: 'select' },
            },
            hasValue: {
                control: { type: 'boolean' },
            },
            value: {
                control: {
                    type: 'range',
                    min: 0,
                    max: 100,
                    step: 1,
                },
            },
            label: {
                control: { type: 'text' },
            },
            hasLabelIcon: {
                control: { type: 'boolean' },
            },
            labelTextPlacement: {
                options: labelTextPlacements,
                control: { type: 'select' },
                if: { arg: 'hasLabelIcon', truthy: true },
            },
            labelPlacement: {
                options: labelPlacements,
                control: { type: 'select' },
            },
            valuePlacement: {
                options: valuePlacements,
                control: { type: 'select' },
                if: { arg: 'hasValue', truthy: true },
            },
            showValueAlign: {
                table: { disable: true },
            },
            valueAlign: {
                options: valueAligns,
                control: { type: 'select' },
                if: { arg: 'showValueAlign', truthy: true },
            },
            caption: {
                control: { type: 'text' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
