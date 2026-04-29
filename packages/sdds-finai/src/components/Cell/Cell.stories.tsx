import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { IconDisclosureRight, IconPlasma } from '@salutejs/plasma-icons';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';

import { config } from './Cell.config';

import { Cell, CellTextbox, CellTextboxTitle } from '.';

type StoryProps = Omit<ComponentProps<typeof Cell>, 'contentLeft' | 'contentRight'> & {
    contentLeft: ContentLeftType;
    contentRight: ContentRightType;
    itemsCount?: number;
    disableLeftContent?: boolean;
    disableRightContent?: boolean;
};
type Story = StoryObj<StoryProps>;

const { sizes } = getConfigVariations(config);
const stretchingValues = ['fixed', 'filled', 'auto'];
const alignLeft = ['top', 'center', 'bottom'];
const alignRight = ['top', 'center', 'bottom'];

const contentLeftOptions = ['none', 'icon', 'avatar'] as const;
const contentRightOptions = ['none', 'icon', 'disclosure', 'iconButton'] as const;

type ContentLeftType = typeof contentLeftOptions[number];
type ContentRightType = typeof contentRightOptions[number];

interface GetSideContentProps {
    option: ContentLeftType | ContentRightType;
    size: string;
    side: 'left' | 'right';
}

type AvatarSize = ComponentProps<typeof Avatar>['size'];
type IconSize = ComponentProps<typeof IconPlasma>['size'];
type IconButtonSize = ComponentProps<typeof IconButton>['size'];

const getSize = (size: any, side: 'left' | 'right') => {
    const avatarSizeMap: Record<string, any> = {
        l: 'l',
        m: 'm',
        s: 's',
        xs: 's',
    };

    const iconSizeMap: Record<string, any> = {
        l: side === 'left' ? 'm' : 's',
        m: 'm',
        s: 's',
        xs: 'xs',
    };

    const iconButtonSizeMap: Record<string, any> = {
        l: 's',
        m: 's',
        s: 'xs',
        xs: 'xs',
    };

    const avatarSize: AvatarSize = avatarSizeMap[size] || 's';
    const iconSize: IconSize = iconSizeMap[size] || 's';
    const iconButtonSize: IconButtonSize = iconButtonSizeMap[size] || 's';

    return { avatarSize, iconSize, iconButtonSize };
};

const meta: Meta<StoryProps> = {
    title: 'Data Display/Cell',
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        alignContentLeft: {
            options: alignLeft,
            control: {
                type: 'select',
            },
        },
        alignContentRight: {
            options: alignRight,
            control: {
                type: 'select',
            },
        },
        contentLeft: {
            options: contentLeftOptions,
            control: {
                type: 'select',
            },
        },
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
        },
    },
};

const getSideContent = ({ option, size, side }: GetSideContentProps) => {
    const { avatarSize, iconSize, iconButtonSize } = getSize(size, side);

    switch (option) {
        case 'icon':
            return <IconPlasma color="inherit" size={iconSize} />;
        case 'avatar':
            return (
                <Avatar
                    size={avatarSize}
                    url="https://avatars.githubusercontent.com/u/1813468?v=4"
                    name="Иван Фадеев"
                />
            );
        case 'disclosure':
            return <IconDisclosureRight color="inherit" size={iconSize} />;
        case 'iconButton':
            return (
                <IconButton color="inherit" size={iconButtonSize}>
                    <IconPlasma color="inherit" size={iconSize} />
                </IconButton>
            );
        default:
            return undefined;
    }
};

export default meta;

export const Default: Story = {
    args: {
        size: 'm',
        stretching: 'filled',
        disableLeftContent: false,
        disableRightContent: false,
        alignContentLeft: 'center',
        alignContentRight: 'center',
        title: 'Title',
        subtitle: 'Subtitle',
        label: 'Label',
        contentLeft: 'avatar',
        contentRight: 'disclosure',
    },
    render: ({ contentLeft, contentRight, size = 'm', children, ...args }: StoryProps) => {
        return (
            <Cell
                size={size}
                contentLeft={getSideContent({ option: contentLeft, size, side: 'left' })}
                contentRight={getSideContent({ option: contentRight, size, side: 'right' })}
                {...args}
            />
        );
    },
};

export const WithContentTextboxCustom: Story = {
    args: {
        size: 'm',
        stretching: 'filled',
    },
    render: ({ contentLeft, contentRight, size = 'm', ...args }: StoryProps) => {
        const MyStyledText = styled.div`
            font-size: 12px;
            font-weight: 600;
            opacity: 0.5;
        `;
        return (
            <Cell
                contentLeft={getSideContent({ option: contentLeft, size, side: 'left' })}
                contentRight={getSideContent({ option: contentRight, size, side: 'right' })}
                view="default"
                size={size}
                stretching={args.stretching}
            >
                <CellTextbox>
                    <CellTextboxTitle>Title</CellTextboxTitle>
                    <MyStyledText>My styled Text</MyStyledText>
                </CellTextbox>
            </Cell>
        );
    },
};
