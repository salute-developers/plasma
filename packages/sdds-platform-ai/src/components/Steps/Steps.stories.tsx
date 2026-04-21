import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getStepsStories } from '@salutejs/plasma-sb-utils';

import { config as stepItemConfig } from './StepItem.config';
import { config } from './Steps.config';
import { Steps } from './Steps';

type StepsProps = ComponentProps<typeof Steps>;

const { meta: META, Default } = getStepsStories({
    component: Steps,
    componentConfig: { stepsConfig: config, stepItemConfig },
    disablePropsList: ['size'],
});

const meta: Meta<StepsProps> = {
    ...(META as Meta<StepsProps>),
    title: 'Navigation/Steps',
};

export default meta;

export { Default };
