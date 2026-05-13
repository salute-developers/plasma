import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDropzoneStories } from '@salutejs/plasma-sb-utils';

import { Dropzone } from './Dropzone';
import { config } from './Dropzone.config';

type DropzoneProps = ComponentProps<typeof Dropzone>;

const { meta: META, Default } = getDropzoneStories({
    component: Dropzone,
    componentConfig: config,
    disablePropsList: ['view', 'size'],
});

const meta: Meta<DropzoneProps> = {
    ...META,
    title: 'Data Entry/⚠️ Dropzone',
};

export default meta;

export { Default };
