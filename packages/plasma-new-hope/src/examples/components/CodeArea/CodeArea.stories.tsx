import React from 'react';
import type { ComponentProps } from 'react';
import { getCodeAreaStories } from '@salutejs/plasma-sb-utils';
import type { Meta } from '@storybook/react-vite';

import { CodeArea } from './CodeArea';
import { config } from './CodeArea.config';

type CodeAreaProps = ComponentProps<typeof CodeArea>;

const { meta: META, Default } = getCodeAreaStories({
    component: CodeArea,
    componentConfig: config,
});

const meta: Meta<CodeAreaProps> = {
    ...META,
    title: 'Data Display/CodeArea',
};

export default meta;

export { Default };
