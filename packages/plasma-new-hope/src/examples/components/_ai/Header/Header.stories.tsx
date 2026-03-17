import React, { ComponentProps } from 'react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { WithTheme } from '../../../_helpers';
import { IconClose, IconPlasma } from '../../../../components/_Icon';
import { IconButton } from '../../IconButton/IconButton';

import { Header } from './Header';
import { config } from './Header.config';

const { views, sizes } = getConfigVariations(config);
const textAligns = ['start', 'center'] as const;

type HeaderStoryProps = ComponentProps<typeof Header> & {
    hasActionBefore?: boolean;
    hasActionAfter?: boolean;
};

const meta: Meta<HeaderStoryProps> = {
    title: 'AI Kit/Header',
    component: Header,
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
        textAlign: {
            options: textAligns,
            control: { type: 'select' },
        },
        ...disableProps(['actionBefore', 'actionAfter']),
    },
    args: {
        view: 'default',
        size: 'xl',
        title: 'AI Chat',
        description: 'SubTitle',
        textAlign: 'start',
        hasDivider: false,
        hasActionBefore: true,
        hasActionAfter: true,
    },
};

export default meta;

const getButtonSize = (size?: string) => {
    switch (size) {
        case 'xl':
        case 'h2':
            return 'l';
        case 'l':
        case 'h3':
            return 'm';
        case 'm':
        case 'h4':
            return 's';
        case 's':
        case 'h5':
            return 'xs';
        default:
            return size;
    }
};

const StoryDefault = ({ size, hasActionBefore, hasActionAfter, ...rest }: HeaderStoryProps) => {
    const iconSize = size === 'xs' || size === 's' || size === 'h5' ? 'xs' : 's';

    return (
        <div style={{ width: '22rem' }}>
            <Header
                {...rest}
                size={size}
                actionBefore={
                    hasActionBefore ? (
                        <IconButton view="clear" size={getButtonSize(size)}>
                            <IconPlasma size={iconSize} color="inherit" />
                        </IconButton>
                    ) : null
                }
                actionAfter={
                    hasActionAfter ? (
                        <IconButton view="clear" size={getButtonSize(size)}>
                            <IconClose size={iconSize} color="inherit" />
                        </IconButton>
                    ) : null
                }
            />
        </div>
    );
};

export const Default: StoryObj<ComponentProps<typeof Header>> = {
    render: StoryDefault,
};
