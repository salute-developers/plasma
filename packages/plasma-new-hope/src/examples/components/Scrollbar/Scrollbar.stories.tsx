import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import styled from 'styled-components';

import { WithTheme } from '../../_helpers';

import { addScrollbar } from './Scrollbar';

const sizes = ['m', 's'];

const meta: Meta = {
    title: 'Navigation/Scrollbar',
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryPropsDefault = {
    size?: string;
};

const StyledContainer = styled.div`
    height: 400px;
    width: 300px;
    overflow-y: scroll;

    &.scrollbarSmall {
        ${addScrollbar('s')}
    }

    &.scrollbarLarge {
        ${addScrollbar('m')}
    }
`;

const sizeMap = {
    s: 'scrollbarSmall',
    m: 'scrollbarLarge',
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        size: 's',
    },
    render: ({ ...args }) => (
        <StyledContainer className={sizeMap[args?.size]}>
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
