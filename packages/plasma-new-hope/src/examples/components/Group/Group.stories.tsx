import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getGroupStories } from '@salutejs/plasma-sb-utils';

import { IconClose } from '../../../components/_Icon';
import { Button } from '../Button/Button';
import { Chip } from '../Chip/Chip';
import { IconButton } from '../IconButton/IconButton';

import { Group } from './Group';
import { config } from './Group.config';

type GroupProps = ComponentProps<typeof Group>;

const { meta: META, Default } = getGroupStories({
    component: Group,
    componentConfig: config,
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
