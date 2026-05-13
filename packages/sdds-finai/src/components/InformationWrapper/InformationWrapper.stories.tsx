import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getInformationWrapperStories } from '@salutejs/plasma-sb-utils';

import { InformationWrapper } from './InformationWrapper';
import { config } from './InformationWrapper.config';

type InformationWrapperProps = ComponentProps<typeof InformationWrapper>;

const { meta: META, Default } = getInformationWrapperStories({
    component: InformationWrapper,
    componentConfig: config,
    defaultArgs: {
        size: 's',
    },
});

const meta: Meta<InformationWrapperProps> = {
    ...META,
    title: 'Data Display/InformationWrapper',
};

export default meta;

export { Default };
