import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRangeStories } from '@salutejs/plasma-sb-utils';
import { styled } from '@linaria/react';

import { IconButton } from '../IconButton/IconButton';
import { EmbedIconButton } from '../EmbedIconButton/EmbedIconButton';

import { Range } from './Range';
import { config } from './Range.config';

type RangeProps = ComponentProps<typeof Range>;

const StyledEmbedIconButton = styled(EmbedIconButton)`
    margin-right: 0;
`;

const { meta: META, Default } = getRangeStories({
    component: Range,
    componentConfig: config,
    iconButton: IconButton,
    embedIconButton: StyledEmbedIconButton,
});

const meta: Meta<RangeProps> = {
    ...META,
    title: 'Data Entry/Range',
};

export default meta;

export { Default };
