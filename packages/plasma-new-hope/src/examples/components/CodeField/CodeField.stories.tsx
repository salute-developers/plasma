import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getCodeFieldStories } from '@salutejs/plasma-sb-utils';

import { CodeField } from './CodeField';
import { config } from './CodeField.config';

type CodeFieldProps = ComponentProps<typeof CodeField>;

const { meta: META, Default } = getCodeFieldStories({
    component: CodeField,
    componentConfig: config,
});

const meta: Meta<CodeFieldProps> = {
    ...META,
    title: 'Data Entry/CodeField',
};

export default meta;

export { Default };
