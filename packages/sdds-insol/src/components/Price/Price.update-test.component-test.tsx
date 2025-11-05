import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import React from 'react';

describe('sdds-insol: Price', () => {
    const Price = getComponent('Price');
    const BodyM = getComponent('BodyM');

    it('[PLASMA-T1375] Price: currency=rub, locale=ru, minimumFractionDigits=0', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price currency="rub" locale="ru" minimumFractionDigits={0}>
                        12345.67
                    </Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1376] Price: currency=usd, stroked, minimumFractionDigits=2', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price currency="usd" stroked minimumFractionDigits={2}>
                        12345.67
                    </Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1377] Price: currency=eur, locale=en, minimumFractionDigits=3', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price currency="eur" locale="en" minimumFractionDigits={3}>
                        12345.67890
                    </Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1378] Price: currency=inr, minimumFractionDigits=5', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price currency="inr" minimumFractionDigits={5}>
                        12345.67
                    </Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('processing periodicity', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price periodicity="/ день">990</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price periodicity="/ неделя">1990</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price periodicity="/ месяц">2990</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price periodicity="/ год">3990</Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('handle two prices in a row', () => {
        mount(
            <CypressTestDecorator>
                <BodyM>
                    <Price>99</Price>
                    <Price style={{ marginLeft: '0.25rem' }} stroked>
                        200
                    </Price>
                </BodyM>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
