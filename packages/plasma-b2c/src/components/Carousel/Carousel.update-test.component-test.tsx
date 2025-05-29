/* eslint-disable cypress/no-unnecessary-waiting */
import * as React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: Carousel', () => {
    const Carousel = getComponent('Carousel');
    const CarouselItem = getComponent('CarouselItem');

    const items = Array(25)
        .fill({
            title: 'Заголовок',
        })
        .map(({ title }, i) => ({
            id: i,
            title: `${title} ${i}`,
        }));

    const StyledCard = styled.div`
        position: relative;
        border-radius: 8px;
        width: 350px;
        height: 50px;
        padding: 8px;
        background-color: #add8e6;
    `;

    const Demo = ({ align = 'center', isDragScrollDisabled = false }) => {
        const [index, setIndex] = React.useState(0);

        return (
            <Carousel
                index={index}
                detectActive
                onIndexChange={setIndex}
                scrollAlign={align}
                isDragScrollDisabled={isDragScrollDisabled}
            >
                {items.map((item, i) => (
                    <CarouselItem key={i} style={{ padding: '0 0.5rem' }} scrollSnapAlign={align}>
                        <StyledCard>{item.title}</StyledCard>
                    </CarouselItem>
                ))}
            </Carousel>
        );
    };

    it('[PLASMA-T1626] Carousel: align=center', () => {
        cy.viewport(1800, 200);

        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('div').first().trigger('mousedown').trigger('mousemove', 5, 5);

        cy.wait(300);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1627] Carousel: align=start', () => {
        cy.viewport(1800, 200);

        mount(
            <CypressTestDecorator>
                <Demo align="start" />
            </CypressTestDecorator>,
        );

        cy.get('div').first().trigger('mousedown').trigger('mousemove', 5, 5);

        cy.wait(300);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1628] Carousel: align=end', () => {
        cy.viewport(1800, 200);

        mount(
            <CypressTestDecorator>
                <Demo align="end" />
            </CypressTestDecorator>,
        );

        cy.get('div').first().trigger('mousedown').trigger('mousemove', 5, 5);

        cy.wait(300);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2004] Carousel: isDragScrollDisabled', () => {
        cy.viewport(1800, 200);

        mount(
            <CypressTestDecorator>
                <Demo isDragScrollDisabled />
            </CypressTestDecorator>,
        );

        cy.get('div').first().trigger('mousedown').trigger('mousemove', 5, 5);

        cy.wait(300);
        cy.matchImageSnapshot();
    });
});
