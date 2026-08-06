import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Filler = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.06);
`;

describe('sdds-insol: Grid', () => {
    const Container = getComponent('Grid');
    const Row = getComponent('Row');
    const Col = getComponent('Col');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Container view="default">
                    <Row>
                        <Col size={1}>
                            <Filler>1</Filler>
                        </Col>
                        <Col size={2}>
                            <Filler>2</Filler>
                        </Col>
                        <Col size={3}>
                            <Filler>3</Filler>
                        </Col>
                        <Col size={4}>
                            <Filler>4</Filler>
                        </Col>
                        <Col size={2}>
                            <Filler>2</Filler>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={3} offset={1}>
                            <Filler>3 offset 1</Filler>
                        </Col>
                        <Col size={6} offset={2}>
                            <Filler>6 offset 2</Filler>
                        </Col>
                    </Row>
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

describe('sdds-insol: Grid screen size & offset', () => {
    const Container = getComponent('Grid');
    const Row = getComponent('Row');
    const Col = getComponent('Col');

    const Grid = () => (
        <Container>
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
                    <Filler>1</Filler>
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
                    <Filler>2</Filler>
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
                    <Filler>3</Filler>
                </Col>
            </Row>
        </Container>
    );

    it('_smallM', () => {
        cy.viewport(320, 480);

        mount(
            <CypressTestDecorator>
                <Grid />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_mediumS', () => {
        cy.viewport(560, 480);

        mount(
            <CypressTestDecorator>
                <Grid />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_mediumM', () => {
        cy.viewport(786, 480);

        mount(
            <CypressTestDecorator>
                <Grid />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_largeS', () => {
        cy.viewport(960, 480);

        mount(
            <CypressTestDecorator>
                <Grid />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_largeM', () => {
        cy.viewport(1200, 480);

        mount(
            <CypressTestDecorator>
                <Grid />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
