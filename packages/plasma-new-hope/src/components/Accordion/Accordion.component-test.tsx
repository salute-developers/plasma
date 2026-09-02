import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { AccordionItemProps } from './ui/AccordionItem/AccordionItem.types';
import type { AccordionProps } from './Accordion.types';

const componentExists = hasComponent('Accordion') && hasComponent('AccordionItem');
const describeFn = getDescribeFN('Accordion');

const title = 'Как оплатить заправку бонусами СберСпасибо?';
const body =
    'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топливa';

const AccordionItemForMatrix = componentExists ? getComponent<AccordionItemProps>('AccordionItem') : () => null;

const getAccordionItems = (count = 3) =>
    Array(count)
        .fill(true)
        .map((_, i) => (
            <AccordionItemForMatrix key={i} title={title}>
                {body}
            </AccordionItemForMatrix>
        ));

const componentProps = {
    children: getAccordionItems(),
};

getBaseVisualTests({
    component: 'Accordion',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'stretching'],
});

describeFn('Accordion', () => {
    const Accordion = componentExists ? getComponent<AccordionProps>('Accordion') : () => null;
    const AccordionItem = componentExists ? getComponent<AccordionItemProps>('AccordionItem') : () => null;

    it('type', () => {
        mount(
            <Accordion>
                <AccordionItem type="arrow" title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="sign" title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="clear" title={title}>
                    {body}
                </AccordionItem>
            </Accordion>,
        );

        cy.matchImageSnapshot();
    });

    it('animation', () => {
        mount(
            <Accordion>
                <AccordionItem title={title}>{body}</AccordionItem>
            </Accordion>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });
        cy.matchImageSnapshot();
    });

    it('type=arrow, alignWithTitle', () => {
        mount(
            <Accordion>
                <AccordionItem type="arrow" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="arrow" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="arrow" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
            </Accordion>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('type=clear, alignWithTitle', () => {
        mount(
            <Accordion>
                <AccordionItem type="clear" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="clear" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
                <AccordionItem type="clear" alignWithTitle title={title}>
                    {body}
                </AccordionItem>
            </Accordion>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <Accordion disabled>
                <AccordionItem title={title}>{body}</AccordionItem>
                <AccordionItem title={title}>{body}</AccordionItem>
                <AccordionItem title={title}>{body}</AccordionItem>
            </Accordion>,
        );

        cy.matchImageSnapshot();
    });
});
