import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { IconClose } from '@salutejs/plasma-icons';
import { getGroupStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { Chip } from '../Chip';
import { IconButton } from '../IconButton';

import { Group } from './Group';
import { config } from './Group.config';

type GroupProps = ComponentProps<typeof Group>;

const { meta: META, Default } = getGroupStories({
    component: Group,
    componentConfig: config,
    defaultArgs: {
        shape: 'segmented',
    },
    additionalComponents: {
        Button,
        IconButton,
        Chip,
        Icon: IconClose,
    },
});

const meta: Meta<GroupProps> = {
    ...META,
    title: 'Layout/Group',
};

export default meta;

export { Default };
