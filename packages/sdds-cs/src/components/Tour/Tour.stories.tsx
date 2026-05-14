import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTourStories } from '@salutejs/plasma-sb-utils';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Range } from '../Range';
import { Switch } from '../Switch';
import { TextField } from '../TextField';

import { config } from './Tour.config';
import { Tour } from './Tour';

type TourProps = ComponentProps<typeof Tour>;

const { meta: META, Default, CustomHighlight } = getTourStories({
    component: Tour,
    componentConfig: config,
    disablePropsList: ['view', 'size'],
    additionalComponents: { Avatar, Button, Range, Switch, TextField },
});

const meta: Meta<TourProps> = {
    ...META,
    title: 'Navigation/Tour',
};

export default meta;

export { Default, CustomHighlight };
