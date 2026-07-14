import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import 'katex/dist/katex.min.css';
import markedKatex from 'marked-katex-extension';
import { getMarkdownStories } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { Markdown } from './Markdown';
import { config } from './Markdown.config';

type MarkdownProps = ComponentProps<typeof Markdown>;
const { meta: META, Default, Latex, Streaming } = getMarkdownStories({
    component: Markdown,
    componentConfig: config,
    decorators: [WithTheme],
    markedKatex,
});
const meta: Meta<MarkdownProps> = {
    ...META,
    title: 'AI Kit/Markdown',
};
export default meta;
export { Default, Latex, Streaming };
