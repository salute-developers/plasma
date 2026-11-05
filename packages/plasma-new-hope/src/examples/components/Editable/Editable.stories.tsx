import React, { forwardRef, useState } from 'react';
import type { ComponentProps, CSSProperties } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { Description, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { IconEditOutline } from '../../../components/_Icon';
import type { IconSize } from '../../../components/_Icon/IconRoot';
import { editableTokens } from '../../../components/Editable';
import { WithTheme } from '../../_helpers';
import { Heading } from '../typography/components/Heading/Heading';

import { Editable } from './Editable';

const H5 = forwardRef<HTMLDivElement, ComponentProps<typeof Heading>>((props, ref) => (
    <Heading {...props} ref={ref} size="h5" />
));
const H6 = forwardRef<HTMLDivElement, ComponentProps<typeof Heading>>((props, ref) => (
    <Heading {...props} ref={ref} size="h6" />
));

const longValue = 'Очень длинное название документа, которое не помещается в одну строку';

const iconGap = (gap: string): CSSProperties =>
    ({
        [editableTokens.iconGap]: gap,
    } as CSSProperties);

const variants = [
    {
        name: 'H5',
        gap: '6px',
        iconSize: 's' as IconSize,
        textComponent: H5,
        value: 'Header 5',
    },
    {
        name: 'H6',
        gap: '2px',
        iconSize: 'xs' as IconSize,
        textComponent: H6,
        value: 'Header 6',
    },
];

const DocsPage = () => (
    <>
        <Title />
        <Subtitle />
        <Description />
        <Stories />
    </>
);

const meta: Meta<typeof Editable> = {
    title: 'Data Entry/Editable',
    decorators: [WithTheme],
    component: Editable,
    parameters: {
        docs: {
            page: DocsPage,
            description: {
                component: [
                    'Редактируемый текст. Иконка передаётся в `icon`, для hover нужен `color="inherit"`.',
                    '',
                    '`multiline` переносит значение на новую строку, когда оно не помещается по ширине.',
                ].join('\n'),
            },
        },
    },
    argTypes: {
        ...disableProps([
            'ref',
            'theme',
            'as',
            'forwardedAs',
            'textComponent',
            'icon',
            'onChange',
            'onBlur',
            'onPaste',
            'value',
            'view',
            'size',
        ]),
    },
};

export default meta;

type ExampleProps = {
    name: string;
    gap: string;
    iconSize: IconSize;
    textComponent: typeof H5;
    value: string;
    multiline?: boolean;
    maxWidth?: string;
};

const Example = ({ name, gap, iconSize, textComponent, value, multiline, maxWidth }: ExampleProps) => {
    const [text, setText] = useState(value);

    return (
        <div>
            <div style={{ marginBottom: '0.5rem', opacity: 0.56 }}>{name}</div>
            <Editable
                style={{ ...iconGap(gap), maxWidth }}
                multiline={multiline}
                icon={<IconEditOutline size={iconSize} color="inherit" />}
                textComponent={textComponent}
                value={text}
                placeholder="Введите текст"
                onChange={(event) => setText(event.target.textContent || '')}
            />
        </div>
    );
};

export const Default: StoryObj = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {variants.map((variant) => (
                <Example key={variant.name} {...variant} />
            ))}
        </div>
    ),
};

export const Multiline: StoryObj<{ multiline?: boolean }> = {
    args: {
        multiline: true,
    },
    render: ({ multiline }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {variants.map((variant) => (
                <Example key={variant.name} {...variant} value={longValue} multiline={multiline} maxWidth="20rem" />
            ))}
        </div>
    ),
};
