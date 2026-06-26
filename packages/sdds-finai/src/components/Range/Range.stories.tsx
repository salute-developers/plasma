import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRangeStories } from '@salutejs/plasma-sb-utils';
import { IconDisclosureRight, IconLockOutline, IconPlasma } from '@salutejs/plasma-icons';

import { Range } from './Range';
import { config } from './Range.config';

type RangeProps = ComponentProps<typeof Range>;

const { meta: META, Default } = getRangeStories({
    component: Range,
    componentConfig: config,
    defaultArgs: config.defaults,
    additionalArgTypes: {
        appearance: {
            options: ['default', 'viewMode'],
            control: { type: 'select' },
        },
        firstInputView: { options: ['default', 'positive', 'negative', 'edited'], control: { type: 'select' } },
        secondInputView: { options: ['default', 'positive', 'negative', 'edited'], control: { type: 'select' } },
    },
    customIcon: (size: string, type?: 'left' | 'right', disabled?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (type === 'left') {
            return <IconPlasma size={iconSize} color="inherit" />;
        }
        if (disabled) {
            return <IconLockOutline size={iconSize} color="inherit" />;
        }
        return <IconDisclosureRight size={iconSize} color="inherit" />;
    },
});

const meta: Meta<RangeProps> = {
    ...META,
    title: 'Data Entry/Range',
};

export default meta;

export { Default };
