import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-giga: Accordion', () => {
    const Accordion = getComponent('Accordion');
    const AccordionItem = getComponent('AccordionItem');

    const title = 'Как оплатить заправку бонусами СберСпасибо?';
    const body =
        'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топливa';

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1708] Accordion: size=l, view=default, stretching=filled, type=arrow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion size="l" view="default" stretching="filled">
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1709] Accordion: size=m, view=secondary, stretching=fixed, type=sign, alignWithTitle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion size="m" view="secondary" stretching="fixed">
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1710] Accordion: size=s, view=clear, type=clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1711] Accordion: size=xs, view=outlined', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion size="xs" view="outlined">
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1712] Accordion: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion size="l" disabled>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
