import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import { IconChevronRight } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { Avatar } from '../Avatar';

import { Cell, CellTextbox, CellTextboxTitle } from '.';

type StoryProps = ComponentProps<typeof Cell> & {
    itemsCount?: number;
    disableLeftContent?: boolean;
    disableRightContent?: boolean;
};
type Story = StoryObj<StoryProps>;

const sizes = ['l', 'm', 's', 'xs'];
const stretchingValues = ['fixed', 'filled', 'auto'];
const alignLeft = ['top', 'center', 'bottom'];
const alignRight = ['top', 'center', 'bottom'];

type SizesCell = 'xs' | 'l' | 'm' | 's' | undefined;
type SizesAvatar = 'l' | 'm' | 's';

const getSize = (size: SizesCell): SizesAvatar => {
    if (size === 'xs' || !size) {
        return 's';
    }

    return size;
};

const ChevronRight = styled(IconChevronRight)`
    color: var(--text-secondary);
`;

const meta: Meta<typeof Cell> = {
    title: 'Content/Cell',
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
    },
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
    },
    render: ({ ...args }: StoryProps) => {
        return (
            <Cell
                contentLeft={
                    !args.disableLeftContent && (
                        <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                    )
                }
                contentRight={!args.disableRightContent && <ChevronRight color="inherit" size="xs" />}
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
    render: ({ ...args }: StoryProps) => {
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
                contentRight={<ChevronRight color="inheart" size="xs" />}
                view="default"
                size={args.size}
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
