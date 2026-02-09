import React from 'react';
import styled from 'styled-components';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';
import { IconBellFill } from '@salutejs/plasma-icons';

import { TextField } from './TextField';
import { config } from './TextField.config';

type TextFieldProps = ComponentProps<typeof TextField>;

const StyledIconBellFill = styled(IconBellFill)<{ customSize?: string }>`
    ${({ customSize }) =>
        customSize &&
        `
            width: ${customSize};
            height: ${customSize};
            flex: 0 0 ${customSize};
        `}
`;

const customIcon = (size: string) => {
    const iconSize = size === 'xs' || size === 's' ? 'xs' : 's';
    const iconCustomSize = size === 'm' ? '1.25rem' : undefined;

    return <StyledIconBellFill color="inherit" customSize={iconCustomSize} size={iconSize} />;
};

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    customIcon,
    defaultArgs: {
        size: 'xl',
    },
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/TextField',
};

export default meta;

export { Default, Chips };
