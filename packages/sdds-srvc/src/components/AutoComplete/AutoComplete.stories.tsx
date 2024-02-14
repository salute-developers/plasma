
import type { StoryObj, Meta } from '@storybook/react';

import { IconPlaceholder, disableProps, InSpacingDecorator } from '../../helpers';
import { H3 } from '../Typography';

const meta: Meta = {
    title: 'Controls/AutoComplete',
    decorators: [InSpacingDecorator],
};

export default meta;

export const Default: StoryObj = {
    render: () => <><H3>Компонент в разработке; Срок — 2024:Q1</H3></>,
};
