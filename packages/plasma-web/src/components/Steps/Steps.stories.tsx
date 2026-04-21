import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getStepsStories } from '@salutejs/plasma-sb-utils';

import { Steps } from './Steps';
import { config } from './Steps.config';

type StepsProps = ComponentProps<typeof Steps>;

const { meta: META, Default } = getStepsStories({
    component: Steps,
    componentConfig: config,
});

const meta: Meta<StepsProps> = {
    ...(META as Meta<StepsProps>),
    title: 'Navigation/Steps',
};

export default meta;

export { Default };
