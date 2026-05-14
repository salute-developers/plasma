import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTourStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { Switch } from '../Switch/Switch';
import { Range } from '../Range/Range';
import { Avatar } from '../Avatar/Avatar';

import { Tour } from './Tour';
import { config } from './Tour.config';

type TourProps = ComponentProps<typeof Tour>;

const { meta: META, Default, CustomHighlight } = getTourStories({
    component: Tour,
    componentConfig: config,
    additionalComponents: {
        Button,
        TextField,
        Switch,
        Range,
        Avatar,
    },
});

const meta: Meta<TourProps> = {
    ...META,
    title: 'Navigation/Tour',
};

export default meta;

export { Default, CustomHighlight };
