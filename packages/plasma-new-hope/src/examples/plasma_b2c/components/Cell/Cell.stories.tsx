import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { WithTheme } from '../../../_helpers';
import { Avatar } from '../Avatar/Avatar';
import { IconChevronLeft } from '../../../../components/_Icon';

import { Cell, Textbox, TextTitle } from './Cell';

type StoryProps = ComponentProps<typeof Cell> & {
    itemsCount?: number;
    enableLeftContent?: boolean;
    enableRightContent?: boolean;
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
    title: 'plasma_b2c/Cell',
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
        alignLeft: {
            options: alignLeft,
            control: {
                type: 'select',
            },
        },
        alignRight: {
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
        enableLeftContent: false,
        enableRightContent: false,
        alignLeft: 'center',
        alignRight: 'center',
        title: 'Title',
        subtitle: 'Subtitle',
        label: 'Label',
    },
    render: ({ ...args }: StoryProps) => {
        return (
            <Cell
                contentLeft={
                    !args.enableLeftContent && (
                        <Avatar size={getSize(args.size)} url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                    )
                }
                alignLeft={args.alignLeft}
                contentRight={!args.enableRightContent && <ChevronRight color="inherit" size="xs" />}
                alignRight={args.alignRight}
                title={args.title}
                subtitle={args.subtitle}
                label={args.label}
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
                contentRight={<ChevronRight color="inherit" size="xs" />}
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
