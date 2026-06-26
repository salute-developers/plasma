import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getAttachStories } from '@salutejs/plasma-sb-utils';

import { Attach } from './Attach';
import { config } from './Attach.config';

type AttachProps = ComponentProps<typeof Attach>;

const { meta: META, Default } = getAttachStories({
    component: Attach,
    componentConfig: config,
    disablePropsList: ['view', 'size'],
});

const meta: Meta<AttachProps> = {
    ...META,
    title: 'Data Entry/Attach',
};

export default meta;

export { Default };
