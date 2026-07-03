import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getCodeInputStories } from '@salutejs/plasma-sb-utils';

import { CodeInput } from './CodeInput';
import { config } from './CodeInput.config';

type CodeInputProps = ComponentProps<typeof CodeInput>;

const { meta: META, Default } = getCodeInputStories({
    component: CodeInput,
    componentConfig: config,
});

const meta: Meta<CodeInputProps> = {
    ...META,
    title: 'Data Entry/CodeInput',
};

export default meta;

export { Default };
