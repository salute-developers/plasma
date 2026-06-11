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

const markdownTemplate = `
# Смешно, но прототип — не панацея
## Смешно, но прототип — не панацея
### Смешно, но прототип — не панацея
#### Смешно, но прототип — не панацея
##### Смешно, но прототип — не панацея
###### Смешно, но прототип — не панацея

Внезапно, представители современных социальных резервов подвергнуты целой серии независимых исследований. Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов. И нет сомнений, что независимые государства могут быть разоблачены. И нет сомнений, что ключевые особенности структуры проекта, инициированные исключительно синтетически, преданы [социально-демократической анафеме.](#)

Внезапно, представители современных социальных резервов подвергнуты целой серии независимых исследований. Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов. И нет сомнений, что независимые государства могут быть разоблачены. **И нет сомнений, что ключевые особенности структуры проекта, инициированные исключительно синтетически, преданы социально-демократической анафеме.**

Внезапно, представители современных социальных резервов подвергнуты целой серии независимых исследований. Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов. И нет сомнений, что независимые государства могут быть разоблачены. *И нет сомнений, что ключевые особенности структуры проекта, инициированные исключительно синтетически, преданы социально-демократической анафеме.*

Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, разоблачены. Картельные сговоры не допускают ситуации, при которой представители современных социальных резервов объективно рассмотрены соответствующими инстанциями. ~~Следует отметить, что граница обучения кадров требует от нас анализа благоприятных перспектив.~~

Внезапно, представители современных социальных резервов подвергнуты целой серии независимых исследований.
- Пункт списка
  - Пункт списка 1
  - Пункт списка 2
  - Пункт списка 3

1. Пункт списка
   1. Пункт списка
   1. Пункт списка
   1. Пункт списка

- [x] Checked
- [ ] Unchecked

Используй команду \`npm install\`

> Внезапно, представители современных социальных резервов подвергнуты целой серии независимых исследований. Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов.

![inline image](https://placehold.co/120x48/e8f5f2/0f172a?text=img)
![inline image](https://placehold.co/120x48/e8f5f2/0f172a?text=img)
![inline image](https://placehold.co/120x48/e8f5f2/0f172a?text=img)

![block image](https://placehold.co/600x200/e8f5f2/0f172a?text=Image)

---

| Label | Label | Label |
| --- | --- | --- |
| Text | Text | Text |
| Text | Text | Text |
| Text | Text | Text |
| Text | Text | Text |
| Text | Text | Text |
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
        storyWidth: 1000,
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
                const nextValue = Math.min(prev + 18, markdownTemplate.length);

                if (nextValue >= markdownTemplate.length) {
                    window.clearInterval(interval);
                }

                return nextValue;
            });
        }, 120);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    const content = useMemo(() => markdownTemplate.slice(0, visibleLength), [visibleLength]);

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
        storyWidth: 1000,
        size: 'm',
        view: 'default',
        shouldParseIncompleteMarkdown: true,
    },
};
