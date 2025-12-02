import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import styled from 'styled-components';

import { WithTheme } from '../../_helpers';
import { Avatar } from '../Avatar/Avatar';
import { IconChevronLeft } from '../../../components/_Icon';

import { Cell, CellTextbox, CellTextboxTitle } from './Cell';

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

const meta: Meta<typeof Cell> = {
    title: 'Data Display/Cell',
    decorators: [WithTheme],
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

const ChevronRight = styled(IconChevronLeft)`
    transform: rotate(180deg);
    color: var(--text-secondary);
`;

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
                view="default"
                size={args.size}
                stretching={args.stretching}
                contentLeft={
                    <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                }
                contentRight={!args.disableRightContent && <ChevronRight color="inherit" size="xs" />}
            >
                <CellTextbox>
                    <CellTextboxTitle>Title</CellTextboxTitle>
                    <MyStyledText>My styled Text</MyStyledText>
                </CellTextbox>
            </Cell>
        );
    },
};
