import React from 'react';

import { Container } from '../components/Grid';

import { GridLines } from './GridLines';

export const InSpacing = (Story: React.FC<React.PropsWithChildren<unknown>>) => (
    <div style={{ padding: '1rem' }}>
        <Story />
    </div>
);

export const WithGridLines = (Story: React.FC<React.PropsWithChildren<unknown>>, context) => (
    <>
        {context.args.displayGrid && <GridLines />}
        <Story />
    </>
);

export const InContainer = (Story: React.FC<React.PropsWithChildren<unknown>>) => (
    <Container>
        <Story />
    </Container>
);
