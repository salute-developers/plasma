import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

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
    const Carousel = componentExists ? getComponent<any>('Carousel') : () => null;

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
                <Carousel scrollAlign="center">
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.get('.carousel-right-control-button').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(250);

        cy.matchImageSnapshot();
    });

    it('prop: controlArrowsDisabled', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel controlArrowsDisabled>
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

    it('prop: defaultIndex', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel defaultIndex={4}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it.skip('prop: loop', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel loop>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.get('.carousel-left-control-button').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);

        cy.matchImageSnapshot();
    });

    it.skip('prop: autoPlay', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ width: '600px' }}>
                <Carousel autoPlay autoPlayInterval={400}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);

        cy.matchImageSnapshot();
    });

    it('prop: virtual', () => {
        cy.viewport(700, 500);

        const ControlledCarousel = () => {
            return (
                <div style={{ width: '600px' }}>
                    <Carousel virtual defaultIndex={10}>
                        {items.map((item, i) => (
                            <StyledCard key={i}>{item.title}</StyledCard>
                        ))}
                    </Carousel>
                </div>
            );
        };

        mount(<ControlledCarousel />);

        cy.get('[data-carousel-index="10"]').should('exist');
        cy.get('[data-carousel-index="17"]').should('not.exist');
        cy.get('[data-carousel-index="3"]').should('not.exist');
    });

    it('prop: onChangeIndex', () => {
        cy.viewport(700, 500);

        const onChangeIndex = cy.stub().as('onChangeIndex');

        mount(
            <div style={{ width: '600px' }}>
                <Carousel onChangeIndex={onChangeIndex}>
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </Carousel>
            </div>,
        );

        cy.get('.carousel-right-control-button').click();
        cy.get('@onChangeIndex').should('have.been.calledOnce');
        cy.get('@onChangeIndex').should('have.been.calledWith', 1);
    });
});
