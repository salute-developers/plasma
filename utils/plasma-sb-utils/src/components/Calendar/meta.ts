import { disableProps, InSpacingDecorator, exampleOnly } from '../../index';

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
            periodSelectorAlign: 'start',
            enableEventTooltip: true,
            eventTooltipSize: 'm',
            ...defaultArgs,
        },
        argTypes: {
            periodSelectorAlign: {
                options: ['start', 'center'],
                control: { type: 'select' },
                if: { arg: 'displayDouble', eq: false },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
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
            ...exampleOnly({
                eventTooltipSize: {
                    options: eventTooltipSizes,
                    control: { type: 'select' },
                },
                displayDouble: { control: { type: 'boolean' } },
                enableEventTooltip: { control: { type: 'boolean' } },
            }),
            ...additionalArgTypes,
            ...disableProps(disablePropsList),
        },
    };
};
