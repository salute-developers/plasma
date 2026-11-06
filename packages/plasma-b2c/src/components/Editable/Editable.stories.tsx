import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { editableTokens } from '@salutejs/plasma-new-hope/styled-components';
import { IconEditOutline } from '@salutejs/plasma-icons';

import { H5, H6 } from '../Typography';

import { Editable } from '.';

const longValue = 'Очень длинное название документа, которое не помещается в одну строку';

const iconGap = (gap: string): CSSProperties =>
    ({
        [editableTokens.iconGap]: gap,
    } as CSSProperties);

const variants = [
    {
        name: 'H5',
        gap: '6px',
        iconSize: 's' as const,
        textComponent: H5,
        value: 'Header 5',
    },
    {
        name: 'H6',
        gap: '2px',
        iconSize: 'xs' as const,
        textComponent: H6,
        value: 'Header 6',
    },
];

const meta: Meta<typeof Editable> = {
    title: 'Data Entry/Editable',
    decorators: [InSpacingDecorator],
    component: Editable,
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

type ExampleProps = typeof variants[number] & {
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

export const Multiline: StoryObj = {
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
