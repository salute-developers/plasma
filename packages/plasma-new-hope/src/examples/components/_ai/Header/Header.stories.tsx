import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getHeaderStories } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconButton } from '../../IconButton/IconButton';

import { Header } from './Header';
import { config } from './Header.config';

type HeaderProps = ComponentProps<typeof Header>;

const { meta: META, Default } = getHeaderStories({
    component: Header,
    componentConfig: config,
    IconButton,
    decorators: [WithTheme],
});

const meta: Meta<HeaderProps> = {
    ...META,
    title: 'AI Kit/Header',
};

export default meta;
export { Default };
