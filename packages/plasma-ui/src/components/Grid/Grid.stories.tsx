import React from 'react';
import { Filler } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { Container, Row, Col } from '.';

const meta: Meta = {
    title: 'Layout/Grid',
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <Container>
            <Row>
                <Col size={1}>
                    <Filler style={{ marginBottom: '1rem' }}>1</Filler>
                </Col>
                <Col size={2}>
                    <Filler style={{ marginBottom: '1rem' }}>2</Filler>
                </Col>
                <Col size={3}>
                    <Filler style={{ marginBottom: '1rem' }}>3</Filler>
                </Col>
                <Col size={4}>
                    <Filler style={{ marginBottom: '1rem' }}>4</Filler>
                </Col>
                <Col size={2}>
                    <Filler style={{ marginBottom: '1rem' }}>2</Filler>
                </Col>
            </Row>
            <Row>
                <Col size={3} offset={1}>
                    <Filler style={{ marginBottom: '1rem' }}>3 offset 1</Filler>
                </Col>
                <Col size={6} offset={2}>
                    <Filler style={{ marginBottom: '1rem' }}>6 offset 2</Filler>
                </Col>
            </Row>
        </Container>
    ),
};

export const Adaptive: StoryObj = {
    render: () => (
        <Container>
            <Row>
                <Col sizeS={1} sizeM={2} sizeL={3} sizeXL={4}>
                    <Filler style={{ marginBottom: '1rem' }}>1</Filler>
                </Col>
                {/* Допустимо указывать fallback-значение ширины для остальных разрешений */}
                <Col size={2} sizeXL={4}>
                    <Filler style={{ marginBottom: '1rem' }}>2</Filler>
                </Col>
            </Row>
            <Row>
                <Col size={3} offsetS={1} offsetM={2} offsetL={3} offsetXL={4}>
                    <Filler style={{ marginBottom: '1rem' }}>3 offset 1</Filler>
                </Col>
                {/* Допустимо указывать fallback-значение отступа для остальных разрешений */}
                <Col size={6} offset={2} offsetXL={4}>
                    <Filler style={{ marginBottom: '1rem' }}>6 offset 2</Filler>
                </Col>
            </Row>
        </Container>
    ),
};

export const Calculable: StoryObj = {
    render: () => (
        <Container>
            <Row>
                <Col type="calc" size={1}>
                    <Filler style={{ marginBottom: '1rem' }}>1</Filler>
                </Col>
                <Col type="calc" size={2}>
                    <Filler style={{ marginBottom: '1rem' }}>2</Filler>
                </Col>
                <Col type="calc" size={3}>
                    <Filler style={{ marginBottom: '1rem' }}>3</Filler>
                </Col>
                <Col type="calc" size={4}>
                    <Filler style={{ marginBottom: '1rem' }}>4</Filler>
                </Col>
                <Col type="calc" size={2}>
                    <Filler style={{ marginBottom: '1rem' }}>2</Filler>
                </Col>
            </Row>
            <Row>
                <Col type="calc" size={3} offset={1}>
                    <Filler style={{ marginBottom: '1rem' }}>3 offset 1</Filler>
                </Col>
                <Col type="calc" size={6} offset={2}>
                    <Filler style={{ marginBottom: '1rem' }}>6 offset 2</Filler>
                </Col>
            </Row>
        </Container>
    ),
};
