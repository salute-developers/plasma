import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacing } from '../../helpers/StoryDecorators';
import { Footnote1 } from '../Typography';

import { Marquee } from '.';

const meta: Meta = {
    title: 'Content/Marquee',
    component: Marquee,
    decorators: [InSpacing],
};

export default meta;

const MarqueeWrapper = styled.div`
    width: 18rem;
    overflow: hidden;
`;

export const Default: StoryObj = {
    render: () => {
        return (
            <MarqueeWrapper>
                <Marquee>
                    <Footnote1>Очень очень длинный текст бегущей строки</Footnote1>
                </Marquee>
            </MarqueeWrapper>
        );
    },
};

export const Basic: StoryObj = {
    render: () => {
        return (
            <MarqueeWrapper>
                <Marquee>Очень очень длинный текст бегущей строки</Marquee>
            </MarqueeWrapper>
        );
    },
};
