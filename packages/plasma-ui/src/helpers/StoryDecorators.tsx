import React from 'react';
import { Story as StoryType, StoryContext } from '@storybook/react';

import { Container } from '../components/Grid';

import { GridLines } from './GridLines';

export const InSpacing = (Story: StoryType) => (
    <div style={{ padding: '1rem' }}>
        <Story />
    </div>
);

export const WithGridLines = (Story: StoryType, context: StoryContext) => (
    <>
        {'displayGrid' in context.args && context.args.displayGrid && <GridLines />}
        <Story />
    </>
);

export const InContainer = (Story: StoryType) => (
    <Container>
        <Story />
    </Container>
);
