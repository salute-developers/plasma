import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getProgressStories } from '@salutejs/plasma-sb-utils';

import { Progress } from './Progress';
import { config } from './Progress.config';

type ProgressProps = ComponentProps<typeof Progress>;

const { meta: META, Default } = getProgressStories({
    component: Progress,
    componentConfig: config,
});

const meta: Meta<ProgressProps> = {
    ...(META as Meta<ProgressProps>),
    title: 'Overlay/Progress',
};

export default meta;

export { Default };
