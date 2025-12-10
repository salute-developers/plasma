import { disableProps, InSpacingDecorator } from '../../index';

import { defaultMaxDate, defaultMinDate, eventTooltipSizes, locales } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Calendar',
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
            size: 'm',
            min: defaultMinDate,
            max: defaultMaxDate,
            includeEdgeDates: false,
            displayDouble: false,
            locale: 'ru',
            stretched: false,
            enableEventTooltip: true,
            eventTooltipSize: 'm',
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
            eventTooltipSize: {
                options: eventTooltipSizes,
                control: { type: 'select' },
            },
            min: {
                control: { type: 'date' },
            },
            max: {
                control: { type: 'date' },
            },
            locale: {
                options: locales,
                control: { type: 'select' },
            },
            ...additionalArgTypes,
            ...disableProps(disablePropsList),
        },
    };
};
