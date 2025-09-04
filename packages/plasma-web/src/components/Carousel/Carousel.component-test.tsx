import * as React from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

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

describe('plasma-web: Carousel', () => {
    const Carousel = getComponent('Carousel');
    const CarouselItem = getComponent('CarouselItem');

    it('basic', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: scrollAlign', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel scrollAlign="center">
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.get('.carousel-right-control-button').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(250);

        cy.matchImageSnapshot();
    });

    it('prop: controlArrowsDisabled', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel controlArrowsDisabled>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: gap', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel gap="40px">
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.disabled', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel paginationOptions={{ disabled: true }}>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.visibleDots', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel paginationOptions={{ visibleDots: 3 }}>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: paginationOptions.centered', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <div style={{ width: '600px' }}>
                    <Carousel paginationOptions={{ centered: true }}>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: defaultIndex', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />

                <div style={{ width: '600px' }}>
                    <Carousel defaultIndex={4}>
                        {items.map((item, i) => (
                            <CarouselItem key={i}>
                                <StyledCard>{item.title}</StyledCard>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
