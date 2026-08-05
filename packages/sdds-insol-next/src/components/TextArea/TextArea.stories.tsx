import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextAreaStories } from '@salutejs/plasma-sb-utils';

import { TextArea } from './TextArea';
import { config } from './TextArea.config';

type TextAreaProps = ComponentProps<typeof TextArea>;

const { meta: META, Default } = getTextAreaStories({
    component: TextArea,
    componentConfig: config,
    defaultArgs: {
        size: 'xl',
    },
    disablePropsList: ['appearance', 'hasDivider', 'clear'],
});

const meta: Meta<TextAreaProps> = {
    ...META,
    title: 'Data Entry/TextArea',
};

export default meta;

export { Default };
