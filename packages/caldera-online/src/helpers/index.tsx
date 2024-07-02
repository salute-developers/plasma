// export { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import React from 'react';
import { Decorator } from '@storybook/react';
import styled from '@emotion/styled';

export const InSpacingDecorator: Decorator = (Story) => (
    <div style={{ padding: '1rem' }}>
        <Story />
    </div>
);

// TODO: WTF ??
const tertiary = 'var(--plasma-colors-tertiary)';

const sizes = {
    xs: 'width: 1rem;height: 1rem;',
    s: 'width: 1.5rem;height: 1.5rem;',
    m: 'width: 2.25rem;height: 2.25rem;',
    l: 'width: 3rem;height: 3rem;',
    xl: 'width: 3.5rem;height: 3.5rem;',
};

export const IconPlaceholder = styled.div<{ size?: keyof typeof sizes }>`
    ${({ size }) => sizes[size || 's']};
    border-radius: 50%;
    background: ${tertiary};
`;

export const disableProps = (props: string[]) => {
    const disabled: Record<string, { table: { disable: true } }> = {};

    props.forEach((prop) => {
        disabled[prop] = { table: { disable: true } };
    });

    return disabled;
};
