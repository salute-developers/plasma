import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';
import { styled } from '@linaria/react';

import { IconButton } from '../IconButton/IconButton';
import { EmbedIconButton } from '../EmbedIconButton/EmbedIconButton';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const StyledEmbedIconButton = styled(EmbedIconButton)`
    margin-right: 0;
`;

const { meta: META, Range } = getDatePickerRangeStories({
    component: DatePickerRange,
    componentConfig: config,
    iconButton: IconButton,
    embedIconButton: StyledEmbedIconButton,
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Range };
