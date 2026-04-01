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
    parameters: {
        docs: {
            source: {
                type: 'code',
            },
        },
    },
    argTypes: {
        view: {
            description: 'Вид компонента',
            options: views,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        size: {
            description: 'Размер компонента',
            options: sizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        title: {
            description: 'Заголовок',
            control: 'text',
            table: { category: 'content-related' },
        },
        description: {
            description: 'Подзаголовок / описание',
            control: 'text',
            table: { category: 'content-related' },
        },
        textAlign: {
            description: 'Выравнивание текстового контента',
            options: textAligns,
            control: { type: 'select' },
            table: { category: 'content-related' },
        },
        hasDivider: {
            description: 'Показывать разделитель',
            control: 'boolean',
            table: { category: 'layout-related' },
        },
        hasActionBefore: {
            description: 'Показывать контент перед заголовком (иконка, аватар и т.п.)',
            control: 'boolean',
            table: { category: 'story-related' },
        },
        hasActionAfter: {
            description: 'Показывать контент после заголовка (кнопка закрытия и т.п.)',
            control: 'boolean',
            table: { category: 'story-related' },
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
                        <IconButton view="clear" size={getButtonSize(size) as any}>
                            <IconPlasma size={iconSize} color="inherit" />
                        </IconButton>
                    ) : null
                }
                actionAfter={
                    hasActionAfter ? (
                        <IconButton view="clear" size={getButtonSize(size) as any}>
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
