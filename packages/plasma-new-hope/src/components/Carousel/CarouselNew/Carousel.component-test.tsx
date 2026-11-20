import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

import type { CarouselNewProps } from './Carousel.types';

const componentExists = hasComponent('Carousel');
const describeFn = getDescribeFN('Carousel');

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 400px;
    height: 370px;
    background-color: #add8e6;
    font-size: 30px;
`;

const items = Array(20)
    .fill(1)
    .map((_, i) => ({
        id: i,
        title: i,
    }));

describeFn('Carousel', () => {
    const Carousel = componentExists ? getComponent<CarouselNewProps>('Carousel') : () => null;

    it('basic', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: scrollAlign', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel scrollAlign="center" defaultIndex={1}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    (['inner', 'outer'] as const).forEach((controlArrowsPlacement) => {
        it(`prop: controlArrowsPlacement=${controlArrowsPlacement}`, () => {
            cy.viewport(700, 500);

            mount(
                <div style={{ width: '600px' }}>
                    <Carousel controlArrowsPlacement={controlArrowsPlacement} defaultIndex={1} fullWidth>
                        {items.map((item) => (
                            <StyledCard key={item.id}>{item.title}</StyledCard>
                        ))}
                    </Carousel>
                </div>,
            );

            cy.matchImageSnapshot();
        });
    });

    it('prop: controlArrowsDisabled', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel controlArrowsDisabled controlArrowsPlacement="outer">
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: gap', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel gap="40px">
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: fullWidth', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel fullWidth>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.disabled', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel paginationOptions={{ disabled: true }}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.visibleDots', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel paginationOptions={{ visibleDots: 3 }}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.centered', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel paginationOptions={{ centered: true }}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });
});
