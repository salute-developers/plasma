import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { WithTheme } from '../../../_helpers';
import { Avatar } from '../Avatar/Avatar';
import { IconChevronLeft } from '../../../../components/_Icon';

import { Cell, Textbox, TextLabel, TextTitle, TextSubtitle } from './Cell';

type StoryProps = ComponentProps<typeof Cell> & { itemsCount?: number };
type Story = StoryObj<StoryProps>;

const views = ['default'];
const sizes = ['l', 'm', 's', 'xs'];
const stretchingValues = ['auto', 'filled'];

type sizesCell = 'xs' | 'l' | 'm' | 's';
type sizesAvatar = 'l' | 'm' | 's';

const getSize = (size: sizesCell): sizesAvatar => {
    if (size === 'xs') {
        return 's';
    }

    return size;
};

const meta: Meta<typeof Cell> = {
    title: 'plasma_web/Cell',
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
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
    },
};

export default meta;

export const Default: Story = {
    args: {
        view: 'default',
        size: 'm',
        stretching: 'auto',
    },
    render: ({ ...args }: StoryProps) => {
        const ChevronRight = styled(IconChevronLeft)`
            transform: rotate(180deg);
        `;
        return (
            <Cell
                contentLeft={
                    <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                }
                contentRight={<ChevronRight size="xs" />}
                title="Title"
                subtitle="Subtitle"
                label="Label"
                {...args}
            />
        );
    },
};

export const WithContentTextbox: Story = {
    args: {
        view: 'default',
        size: 'm',
        stretching: 'auto',
    },
    render: ({ ...args }: StoryProps) => {
        const ChevronRight = styled(IconChevronLeft)`
            transform: rotate(180deg);
        `;
        return (
            <Cell
                contentLeft={
                    <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                }
                contentRight={<ChevronRight size="xs" />}
                {...args}
            >
                <Textbox title="Title" subtitle="Subtitle" label="Label" />
            </Cell>
        );
    },
};

export const WithContentTextboxWithTags: Story = {
    args: {
        view: 'default',
        size: 'm',
        stretching: 'auto',
    },
    render: ({ ...args }: StoryProps) => {
        const ChevronRight = styled(IconChevronLeft)`
            transform: rotate(180deg);
        `;
        return (
            <Cell
                contentLeft={
                    <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                }
                contentRight={<ChevronRight size="xs" />}
                {...args}
            >
                <Textbox>
                    <TextLabel>Label</TextLabel>
                    <TextTitle>Title</TextTitle>
                    <TextSubtitle>Subtitle</TextSubtitle>
                </Textbox>
            </Cell>
        );
    },
};

export const WithContentTextboxCustom: Story = {
    args: {
        view: 'default',
        size: 'm',
        stretching: 'auto',
    },
    render: ({ ...args }: StoryProps) => {
        const ChevronRight = styled(IconChevronLeft)`
            transform: rotate(180deg);
        `;

        const MyStyledText = styled.div`
            font-size: 12px;
            font-weight: 600;
            opacity: 0.5;
        `;
        return (
            <Cell
                contentLeft={
                    <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                }
                contentRight={<ChevronRight size="xs" />}
                {...args}
            >
                <Textbox>
                    <TextTitle>Title</TextTitle>
                    <MyStyledText>My styled Text</MyStyledText>
                </Textbox>
            </Cell>
        );
    },
};
