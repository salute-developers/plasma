import React, { ComponentProps, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import 'katex/dist/katex.min.css';
import markedKatex from 'marked-katex-extension';

import { WithTheme } from '../../../_helpers';

import { Markdown } from './Markdown';
import { config } from './Markdown.config';

type StoryProps = ComponentProps<typeof Markdown> & {
    storyWidth: number;
};

const { views, sizes } = getConfigVariations(config);

const markdownTemplate = `# Markdown Token Showcase

Параграф с **strong**, *em*, ~~del~~, \`codespan\`, [inline link](https://example.com) и ![inline image](https://placehold.co/120x48/e8f5f2/0f172a?text=img).

Строка с escape-последовательностью: \\*literal asterisk\\*.
Следующая строка после hard break.

> Blockquote с [ссылкой по reference][docs-ref] и вложенным \`inline code\`.

## Block Tokens

Обычный paragraph с текстом и autolink https://github.com.

---

### List

- Первый item
- Второй item
  - nested item
  - ещё один nested item

1. Ordered item
2. Ordered item

\`\`\`tsx
type AnswerProps = {
    content: React.ReactNode;
};

export const AnswerBody = ({ content }: AnswerProps) => {
    return <div>{content}</div>;
};
\`\`\`

<div>Inline HTML / block HTML token</div>

![Block image](https://placehold.co/960x320/e8f5f2/0f172a?text=Markdown+Image)

## GFM Tokens

### Table

| Token | Source |
| --- | --- |
| table | GFM |
| del | GFM |
| task list | GFM |

### Task List

- [x] Данные уже готовы к показу
- [ ] Пользователь ещё не нажал "Повторить"

### Extra GFM Cases

URL autolink: https://github.com

[docs-ref]: https://marked.js.org
`;

const latexTemplate = `# LaTeX + KaTeX

Inline formula: $c = \\pm\\sqrt{a^2 + b^2}$.

Block formula:

$$
E = mc^2
$$

Aligned block:

$$
\\begin{aligned}
f(x) &= x^2 + 2x + 1 \\\\
f'(x) &= 2x + 2
\\end{aligned}
$$

Matrix:

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4
\\end{bmatrix}
$$
`;

const streamingTemplate = `# Ответ модели

Генерация идёт постепенно, поэтому текст приходит небольшими чанками.

## Что уже известно

- markdown рендерится по мере поступления;
- незавершённый fenced block не ломает разметку;
- список и заголовки появляются сразу.

\`\`\`ts
export const buildAnswer = (topic: string) => {
    return {
        topic,
        status: 'streaming',
        sections: ['summary', 'risks', 'next-steps'],
    };
};
\`\`\`

## Следующий шаг

После завершения стрима пользователь видит уже готовый markdown-документ.
`;

const StoryWrap = styled.div`
    box-sizing: border-box;
    width: 100%;
`;

const meta: Meta<StoryProps> = {
    title: 'AI Kit/Markdown',
    component: Markdown,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: { type: 'select' },
        },
        size: {
            options: sizes,
            control: { type: 'select' },
        },
        storyWidth: {
            control: { type: 'number' },
        },
        shouldParseIncompleteMarkdown: {
            control: { type: 'boolean' },
        },
        ...disableProps(['tokenRenderer', 'markedOptions']),
    },
    args: {
        view: 'default',
        size: 'm',
        content: markdownTemplate,
        storyWidth: 760,
        shouldParseIncompleteMarkdown: true,
    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    render: ({ storyWidth, ...args }) => (
        <StoryWrap style={{ maxWidth: `${storyWidth}px` }}>
            <Markdown {...args} />
        </StoryWrap>
    ),
};

export const Latex: StoryObj<StoryProps> = {
    render: ({ storyWidth, size, view, shouldParseIncompleteMarkdown }) => (
        <StoryWrap style={{ maxWidth: `${storyWidth}px` }}>
            <Markdown
                content={latexTemplate}
                markedOptions={markedKatex({
                    throwOnError: false,
                })}
                shouldParseIncompleteMarkdown={shouldParseIncompleteMarkdown}
                size={size}
                view={view}
            />
        </StoryWrap>
    ),
    args: {
        storyWidth: 760,
        size: 'm',
        view: 'default',
        shouldParseIncompleteMarkdown: true,
    },
};

const StreamingExample = ({
    storyWidth,
    size,
    view,
    shouldParseIncompleteMarkdown,
}: Pick<StoryProps, 'storyWidth' | 'size' | 'view' | 'shouldParseIncompleteMarkdown'>) => {
    const [visibleLength, setVisibleLength] = useState(0);

    useEffect(() => {
        setVisibleLength(0);

        const interval = window.setInterval(() => {
            setVisibleLength((prev) => {
                const nextValue = Math.min(prev + 18, streamingTemplate.length);

                if (nextValue >= streamingTemplate.length) {
                    window.clearInterval(interval);
                }

                return nextValue;
            });
        }, 120);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    const content = useMemo(() => streamingTemplate.slice(0, visibleLength), [visibleLength]);

    return (
        <StoryWrap style={{ maxWidth: `${storyWidth}px` }}>
            <Markdown
                content={content}
                shouldParseIncompleteMarkdown={shouldParseIncompleteMarkdown}
                size={size}
                view={view}
            />
        </StoryWrap>
    );
};

export const Streaming: StoryObj<StoryProps> = {
    render: ({ storyWidth, size, view, shouldParseIncompleteMarkdown }) => (
        <StreamingExample
            shouldParseIncompleteMarkdown={shouldParseIncompleteMarkdown}
            size={size}
            storyWidth={storyWidth}
            view={view}
        />
    ),
    args: {
        storyWidth: 760,
        size: 'm',
        view: 'default',
        shouldParseIncompleteMarkdown: true,
    },
};
