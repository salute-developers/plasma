import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTreeStories } from '@salutejs/plasma-sb-utils';

import { Tree } from './Tree';
import { config } from './Tree.config';

type StoryProps = ComponentProps<typeof Tree>;

const { meta: META, Default, DragAndDrop, AsyncLoading } = getTreeStories({
    component: Tree,
    componentConfig: config,
});

const meta: Meta<StoryProps> = {
    ...META,
    title: 'Data Entry/Tree',
};

export default meta;

export { Default, DragAndDrop, AsyncLoading };
