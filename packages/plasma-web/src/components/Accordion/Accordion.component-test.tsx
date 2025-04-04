import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount, PadMe, processingFailedState } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l', 'h2', 'h3', 'h4', 'h5'];

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

    processingFailedState(beforeEach, afterEach);

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view:clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion view="clear">
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {sizes.map((size) => (
                    <>
                        <Accordion size={size}>
                            <AccordionItem title={title}>{body}</AccordionItem>
                            <AccordionItem size="s" title={title}>
                                {body}
                            </AccordionItem>
                        </Accordion>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_type', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('animation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Accordion>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('.accordion-root').last().trigger('click', { waitForAnimations: true });
        cy.matchImageSnapshot();
    });
});
