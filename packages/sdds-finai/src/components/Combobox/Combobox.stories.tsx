import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getComboboxStories } from '@salutejs/plasma-sb-utils';

import { Combobox } from './Combobox';
import { config } from './Combobox.config';

type ComboboxProps = ComponentProps<typeof Combobox>;

const { meta: META, Single, Multiple, SelectAll, AddItem } = getComboboxStories({
    component: Combobox,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
    },
});

const meta: Meta<ComboboxProps> = {
    ...META,
    title: 'Data Entry/Combobox',
};

export default meta;

export { Single, Multiple, SelectAll, AddItem };
