import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Filler = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.06);
`;

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Grid Legacy', () => {
    const Container = getComponent('Container');
    const Row = getComponent('Row');
    const Col = getComponent('Col');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                </Container>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    const Grid = () => (
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

    it('_S', () => {
        cy.viewport(375, 200);

        mount(
            <CypressTestDecoratorWithTypo>
                <Grid />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_M', () => {
        cy.viewport(1280, 200);

        mount(
            <CypressTestDecoratorWithTypo>
                <Grid />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_L', () => {
        cy.viewport(1920, 200);

        mount(
            <CypressTestDecoratorWithTypo>
                <Grid />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_XL', () => {
        cy.viewport(2000, 200);

        mount(
            <CypressTestDecoratorWithTypo>
                <Grid />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
