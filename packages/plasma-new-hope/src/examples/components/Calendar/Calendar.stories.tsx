import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getCalendarStories } from '@salutejs/plasma-sb-utils';

import { Heading } from '../typography/components/Heading/Heading';
import { Tabs } from '../Tabs/Tabs';
import { TabItem } from '../Tabs/TabItem';

import { config } from './CalendarBase.config';
import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from './Calendar';

type ButtonProps = ComponentProps<typeof Calendar>;

const { meta: META, Default, Range } = getCalendarStories({
    component: Calendar,
    componentConfig: config,
    additionalComponents: {
        Tabs,
        TabItem,
        Heading,
        CalendarBase,
        CalendarBaseRange,
        CalendarDouble,
        CalendarDoubleRange,
    },
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Calendar',
};

export default meta;

export { Default, Range };
