import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getLinkStories } from '@salutejs/plasma-sb-utils';

import { config } from './Link.config';
import { Link } from './Link';

type LinkProps = ComponentProps<typeof Link>;

const { meta: META, Default } = getLinkStories({
    component: Link,
    componentConfig: config,
    defaultArgs: { view: 'accent' },
});

const meta: Meta<LinkProps> = {
    ...(META as Meta<LinkProps>),
    title: 'Navigation/Link',
};

export default meta;

export { Default };
