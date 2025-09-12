import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getSelectStories } from '@salutejs/plasma-sb-utils';

import { config } from './Select.config';
import { Select } from './Select';

type ButtonProps = ComponentProps<typeof Select>;

const { meta: META, Single } = getSelectStories({ component: Select, componentConfig: config });
const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Select',
};

export default meta;

export { Single };
