import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacingDecorator } from '../../helpers';
import { H3 } from '../Typography';

const meta: Meta = {
    title: 'Controls/TextField',
    decorators: [InSpacingDecorator],
};

export default meta;

export const Default: StoryObj = {
    render: () => <H3>Компонент в разработке; Срок — 2024:Q1</H3>,
};
