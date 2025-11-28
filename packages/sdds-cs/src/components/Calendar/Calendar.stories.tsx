import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getCalendarStories } from '@salutejs/plasma-sb-utils';

import { Tabs } from '../Tabs/Tabs';
import { TabItem } from '../Tabs/TabItem';
import { H3 } from '../Typography';

import { config } from './CalendarBase.config';
import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from './Calendar';

type ButtonProps = ComponentProps<typeof Calendar>;

const { meta: META, Default, Range } = getCalendarStories({
    component: Calendar,
    componentConfig: config,
    additionalComponents: {
        Tabs,
        TabItem,
        Heading: H3,
        CalendarBase,
        CalendarBaseRange,
        CalendarDouble,
        CalendarDoubleRange,
    },
    defaultArgs: { enableEventTooltip: false, size: 's' },
    disablePropsList: ['eventTooltipSize', 'enableEventTooltip'],
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Calendar',
};

export default meta;

export { Default, Range };
