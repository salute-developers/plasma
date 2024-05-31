import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Accordion', () => {
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

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion>
                    <AccordionItem title={title} body={body} />
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view:clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion view="clear">
                    <AccordionItem title={title} body={body} />
                    <AccordionItem title={title} body={body} />
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion size="xs">
                    <AccordionItem title={title} body={body} />
                    <AccordionItem size="s" title={title} body={body} />
                </Accordion>
                <PadMe />
                <Accordion size="s">
                    <AccordionItem title={title} body={body} />
                    <AccordionItem size="s" title={title} body={body} />
                </Accordion>
                <PadMe />
                <Accordion size="m">
                    <AccordionItem title={title} body={body} />
                    <AccordionItem size="s" title={title} body={body} />
                </Accordion>
                <PadMe />
                <Accordion size="l">
                    <AccordionItem title={title} body={body} />
                    <AccordionItem size="s" title={title} body={body} />
                </Accordion>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_type', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion>
                    <AccordionItem type="arrow" title={title} body={body} />
                    <AccordionItem type="sign" title={title} body={body} />
                    <AccordionItem type="clear" title={title} body={body} />
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('animation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion>
                    <AccordionItem title={title} body={body} />
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });
        cy.matchImageSnapshot();
    });
});
