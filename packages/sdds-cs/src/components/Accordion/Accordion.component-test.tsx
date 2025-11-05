import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('sdds-cs: Accordion', () => {
    const Accordion = getComponent('Accordion');
    const AccordionItem = getComponent('AccordionItem');

    const title = 'Как оплатить заправку бонусами СберСпасибо?';
    const body =
        'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топливa';

    it('[PLASMA-T1708] Accordion: view=default, stretching=filled, type=arrow', () => {
        mount(
            <CypressTestDecorator>
                <Accordion size="s" view="default" stretching="filled">
                    <AccordionItem type="arrow" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="arrow" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="arrow" title={title}>
                        {body}
                    </AccordionItem>
                </Accordion>
            </CypressTestDecorator>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1709] Accordion: view=secondary, stretching=fixed, type=sign, alignWithTitle', () => {
        mount(
            <CypressTestDecorator>
                <Accordion size="s" view="secondary" stretching="fixed">
                    <AccordionItem type="sign" alignWithTitle title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="sign" alignWithTitle title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="sign" alignWithTitle title={title}>
                        {body}
                    </AccordionItem>
                </Accordion>
            </CypressTestDecorator>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1710] Accordion: size=s, view=clear, type=clear', () => {
        mount(
            <CypressTestDecorator>
                <Accordion size="s" view="clear">
                    <AccordionItem type="clear" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="clear" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="clear" title={title}>
                        {body}
                    </AccordionItem>
                </Accordion>
            </CypressTestDecorator>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1711] Accordion: view=outlined', () => {
        mount(
            <CypressTestDecorator>
                <Accordion size="s" view="outlined">
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecorator>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1712] Accordion: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Accordion size="s" disabled>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
