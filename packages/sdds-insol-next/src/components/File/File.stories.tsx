import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getFileStories } from '@salutejs/plasma-sb-utils';

import { File } from './File';
import { config } from './File.config';

type FileProps = ComponentProps<typeof File>;

const { meta: META, Default } = getFileStories({
    component: File,
    componentConfig: config,
});

const meta: Meta<FileProps> = {
    ...META,
    title: 'Data Entry/File',
};

export default meta;

export { Default };
