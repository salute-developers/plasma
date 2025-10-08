import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { WithTheme } from '../../_helpers';
import { scrollbarLarge, scrollbarSmall } from '../../../mixins/addScrollbar';

import { Scrollbar } from './Scrollbar';

const views = ['default'];
const sizes = ['m', 's'];

const meta: Meta<typeof Scrollbar> = {
    title: 'Data Display/Scrollbar',
    component: Scrollbar,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        placement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Scrollbar> & {
    hasValue?: boolean;
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 's',
        offset: '8px',
        autoHide: true,
        autoHideDelay: 3000,
        placement: 'right',
    },
    render: ({ ...args }) => (
        <Scrollbar {...args} style={{ height: '400px', width: '300px' }}>
            <div>
                {Array.from({ length: 50 }, (_, i) => (
                    <div key={i} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        Item {i + 1}
                    </div>
                ))}
            </div>
        </Scrollbar>
    ),
};

const StyledContainer = styled.div`
    height: 400px;
    width: 300px;
    overflow-y: scroll;

    &.scrollbarSmall {
        ${scrollbarSmall()}
    }

    &.scrollbarLarge {
        ${scrollbarLarge()}
    }
`;

export const NativeScroll: StoryObj<StoryPropsDefault> = {
    args: {
        size: 's',
    },
    render: ({ ...args }) => (
        <StyledContainer className={args.size === 's' ? 'scrollbarSmall' : 'scrollbarLarge'}>
            <div>
                {Array.from({ length: 50 }, (_, i) => (
                    <div key={i} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        Item {i + 1}
                    </div>
                ))}
            </div>
        </StyledContainer>
    ),
};
