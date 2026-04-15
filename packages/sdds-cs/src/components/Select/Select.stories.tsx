import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSelectStories } from '@salutejs/plasma-sb-utils';

import { Select } from './Select';
import { config } from './Select.config';

type SelectProps = ComponentProps<typeof Select>;

const { meta: META, Single, Multiselect, Predefined, SelectAll } = getSelectStories({
    component: Select,
    componentConfig: config,
    disablePropsList: ['size', 'labelPlacement', 'hasHint', 'treeView'],
    defaultArgs: {
        size: 's',
        chipView: 'default',
    },
});

const meta: Meta<SelectProps> = {
    ...META,
    title: 'Data Entry/Select',
};

export default meta;

export { Single, Multiselect, Predefined, SelectAll };
