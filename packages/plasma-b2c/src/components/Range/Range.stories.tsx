import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRangeStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../IconButton';

import { Range } from './Range';
import { config } from './Range.config';

type RangeProps = ComponentProps<typeof Range>;

const { meta: META, Default } = getRangeStories({
    component: Range,
    componentConfig: config,
    iconButton: IconButton,
});

const meta: Meta<RangeProps> = {
    ...META,
    title: 'Data Entry/Range',
};

export default meta;

export { Default };
