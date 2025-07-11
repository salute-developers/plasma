/* eslint-disable cypress/no-unnecessary-waiting */
import * as React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { CarouselCard } from './Carousel.examples';

const image =
    'data:image/jpeg;base64,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';

const items = [
    { title: 'Каждый', subtitle: 'Each', imageSrc: image },
    { title: 'Охотник', subtitle: 'Hunter', imageSrc: image },
    { title: 'Желает', subtitle: 'Whants', imageSrc: image },
    { title: 'Знать', subtitle: 'To know', imageSrc: image },
    { title: 'Где', subtitle: 'Where', imageSrc: image },
    { title: 'Сидит', subtitle: 'Is', imageSrc: image },
    { title: 'Фазан', subtitle: 'The pheasant', imageSrc: image },
];

describe('plasma-web: CarouselOld', () => {
    const Carousel = getComponent('Carousel');
    const CarouselItem = getComponent('CarouselItem');

    it('default', () => {
        const index = 0;

        mount(
            <CypressTestDecorator>
                <Carousel index={index} style={{ margin: '0 -0.5rem' }} scrollSnapType="none">
                    {items.map((item, i) => (
                        <CarouselItem key={`item:${i}`} style={{ width: 320, padding: '0 0.5rem' }}>
                            <CarouselCard {...item} />
                        </CarouselItem>
                    ))}
                </Carousel>
            </CypressTestDecorator>,
        );

        cy.wait(100);
        cy.matchImageSnapshot();
    });
});
