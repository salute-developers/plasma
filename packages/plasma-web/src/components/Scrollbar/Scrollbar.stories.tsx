import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { scrollBar } from './Scrollbar';

const sizes = ['m', 's'];

const meta: Meta = {
    title: 'Data Display/Scrollbar',
    decorators: [InSpacingDecorator],
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
        ${scrollBar('s')}
    }

    &.scrollbarLarge {
        ${scrollBar('m')}
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
