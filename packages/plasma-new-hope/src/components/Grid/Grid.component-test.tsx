import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

import type { GridProps } from './Grid.types';

const componentName = hasComponent('Container') ? 'Container' : 'Grid';
const componentExists = hasComponent(componentName);
const describeFn = getDescribeFN(componentName);

const Filler = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #a8a875;
`;

const componentProps: GridProps = {};

getBaseVisualTests({
    component: componentName,
    componentProps,
    configPropsForMatrix: ['view'],
});

describeFn('Grid', () => {
    const Container = componentExists ? getComponent<GridProps>(componentName) : () => null;
    const Row = getComponent('Row');
    const Col = getComponent('Col');

    it('simple', () => {
        mount(
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
            </Container>,
        );

        cy.matchImageSnapshot();
    });

    const GridScreenSize = () => (
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

    const GridLegacySize = () => (
        <Container>
            <Row>
                <Col sizeS={1} sizeM={2} sizeL={3} sizeXL={4}>
                    <Filler>1</Filler>
                </Col>
                <Col size={2} sizeXL={4}>
                    <Filler>2</Filler>
                </Col>
            </Row>
            <Row>
                <Col size={3} offsetS={1} offsetM={2} offsetL={3} offsetXL={4}>
                    <Filler>3 offset 1</Filler>
                </Col>
                <Col size={6} offset={2} offsetXL={4}>
                    <Filler>6 offset 2</Filler>
                </Col>
            </Row>
        </Container>
    );

    it('screen size, smallM', () => {
        cy.viewport(320, 480);
        mount(<GridScreenSize />);
        cy.matchImageSnapshot();
    });

    it('screen size, mediumS', () => {
        cy.viewport(560, 480);
        mount(<GridScreenSize />);
        cy.matchImageSnapshot();
    });

    it('screen size, mediumM', () => {
        cy.viewport(786, 480);
        mount(<GridScreenSize />);
        cy.matchImageSnapshot();
    });

    it('screen size, largeS', () => {
        cy.viewport(960, 480);
        mount(<GridScreenSize />);
        cy.matchImageSnapshot();
    });

    it('screen size, largeM', () => {
        cy.viewport(1200, 480);
        mount(<GridScreenSize />);
        cy.matchImageSnapshot();
    });

    it('legacy, simple', () => {
        mount(
            <Container>
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
            </Container>,
        );

        cy.matchImageSnapshot();
    });

    it('legacy, size=S', () => {
        cy.viewport(375, 200);
        mount(<GridLegacySize />);
        cy.matchImageSnapshot();
    });

    it('legacy, size=M', () => {
        cy.viewport(1280, 200);
        mount(<GridLegacySize />);
        cy.matchImageSnapshot();
    });

    it('legacy, size=L', () => {
        cy.viewport(1920, 200);
        mount(<GridLegacySize />);
        cy.matchImageSnapshot();
    });

    it('legacy, size=XL', () => {
        cy.viewport(2000, 200);
        mount(<GridLegacySize />);
        cy.matchImageSnapshot();
    });
});
