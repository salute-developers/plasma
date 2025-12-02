import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Col, Grid, Row } from './Grid';

const meta: Meta = {
    title: 'Layout/Grid',
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledContent = styled.div`
    height: 10rem;
    width: 100%;
    background: #a8a875;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--inverse-text-primary);
`;

export const Default = {
    args: {
        colsCount: 6,
    },
    render: ({ colsCount }) => (
        <Grid>
            <Row>
                {Array(colsCount)
                    .fill(true)
                    .map((_, i) => (
                        <Col size={1} key={colsCount + i}>
                            <StyledContent>{i + 1}</StyledContent>
                        </Col>
                    ))}
            </Row>
        </Grid>
    ),
};

export const CustomColsPosition = {
    render: () => (
        <Grid view="default">
            <Row>
                <Col
                    smallM={{
                        size: 1,
                    }}
                    mediumS={{
                        size: 2,
                    }}
                    mediumM={{
                        size: 3,
                        offset: 1,
                    }}
                    largeS={{
                        size: 4,
                        offset: 1,
                    }}
                    largeM={{
                        size: 5,
                        offset: 2,
                    }}
                >
                    <StyledContent>1</StyledContent>
                </Col>
                <Col
                    smallM={{
                        size: 1,
                        offset: 1,
                    }}
                    mediumS={{
                        size: 2,
                        offset: 1,
                    }}
                    mediumM={{
                        size: 4,
                    }}
                    largeS={{
                        size: 4,
                        offset: 3,
                    }}
                    largeM={{
                        size: 5,
                        offset: 1,
                    }}
                >
                    <StyledContent>2</StyledContent>
                </Col>
                <Col
                    smallM={{
                        size: 1,
                    }}
                    mediumS={{
                        size: 2,
                        offset: 1,
                    }}
                    mediumM={{
                        size: 2,
                        offset: 2,
                    }}
                    largeS={{
                        size: 3,
                        offset: 4,
                    }}
                    largeM={{
                        size: 6,
                        offset: 3,
                    }}
                >
                    <StyledContent>3</StyledContent>
                </Col>
            </Row>
            <Row>
                <Col
                    smallM={{
                        size: 1,
                        offset: 2,
                    }}
                    mediumS={{
                        size: 2,
                        offset: 5,
                    }}
                    mediumM={{
                        size: 2,
                        offset: 8,
                    }}
                    largeS={{
                        size: 2,
                        offset: 12,
                    }}
                    largeM={{
                        size: 2,
                        offset: 16,
                    }}
                >
                    <StyledContent>1</StyledContent>
                </Col>
                <Col
                    smallM={{
                        size: 2,
                    }}
                    mediumS={{
                        size: 2,
                    }}
                    mediumM={{
                        size: 4,
                    }}
                    largeS={{
                        size: 4,
                    }}
                    largeM={{
                        size: 5,
                    }}
                >
                    <StyledContent>2</StyledContent>
                </Col>
            </Row>
        </Grid>
    ),
};

export const LegacyGrid = {
    render: () => (
        <Grid view="legacy">
            <Row>
                <Col sizeS={2} sizeM={3} sizeL={4} sizeXL={4} sizeXXL={4}>
                    <StyledContent>1</StyledContent>
                </Col>
                <Col sizeS={1} sizeM={1} sizeL={2} offsetL={1} sizeXL={2} offsetXL={1} sizeXXL={2} offsetXXL={1}>
                    <StyledContent>2</StyledContent>
                </Col>
                <Col sizeS={1} sizeM={1} sizeL={2} sizeXL={3} sizeXXL={3}>
                    <StyledContent>3</StyledContent>
                </Col>
            </Row>

            <Row>
                <Col sizeS={2} sizeM={3} sizeL={4} sizeXL={4} sizeXXL={5}>
                    <StyledContent>1</StyledContent>
                </Col>
                <Col sizeS={1} sizeM={1} sizeL={2} offsetL={1} offsetXL={2} sizeXL={3} offsetXXL={2} sizeXXL={3}>
                    <StyledContent>3</StyledContent>
                </Col>
            </Row>
        </Grid>
    ),
};
