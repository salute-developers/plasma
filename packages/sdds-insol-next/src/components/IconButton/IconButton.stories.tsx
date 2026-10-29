import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import styled from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';
import { getIconButtonStories } from '@salutejs/plasma-sb-utils';

import { config } from './IconButton.config';
import { config as configOutline } from './IconButton.outline.config';
import { IconButton } from './IconButton';

type IconButtonProps = ComponentProps<typeof IconButton>;

const iconSizeMap: Record<string, 'xs' | 's'> = {
    m: 's',
    l: 's',
    xl: 's',
    s: 's',
    xxs: 'xs',
    xs: 'xs',
};

const StyledIconClose = styled(IconClose)<{ customSize?: string }>`
    ${({ customSize }) =>
        customSize &&
        `
            width: ${customSize};
            height: ${customSize};
        `}
`;

const Icon = (size: string) => (
    <StyledIconClose
        color="inherit"
        customSize={size === 'm' ? '1.25rem' : undefined}
        size={iconSizeMap[size] ?? 's'}
    />
);

const { meta: META, Default } = getIconButtonStories({
    component: IconButton,
    componentConfig: config,
    outlineConfig: configOutline,
    Icon,
});

const meta: Meta<IconButtonProps> = {
    ...META,
    title: 'Data Entry/IconButton',
};

export default meta;

export { Default };
