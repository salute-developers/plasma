import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDropdownStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';
import { config } from './Dropdown.config';

type SelectProps = ComponentProps<typeof Dropdown>;

const { meta: META, Default } = getDropdownStories({
    component: Dropdown,
    componentConfig: config,
    additionalComponents: {
        Button,
    },
});

const meta: Meta<SelectProps> = {
    ...META,
    title: 'Data Entry/Dropdown',
};

export default meta;

export { Default };
