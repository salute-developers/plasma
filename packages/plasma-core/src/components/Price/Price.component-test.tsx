import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

// TODO: why we need global styles on body?
describe('plasma-core: Price', () => {
    const Price = getComponent('Price');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Price>12345.67</Price>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_currency', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Price currency="rub">12345.67</Price>
                <PadMe />
                <Price currency="usd">12345.67</Price>
                <PadMe />
                <Price currency="eur">12345.67</Price>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_stroke', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Price stroke>12345.67</Price>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_minFraction', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Price minimumFractionDigits={4}>12345.6789</Price>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('processing periodicity', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>

                <Price periodicity="/ день">990</Price>
                <PadMe />
                <Price periodicity="/ неделя">1990</Price>
                <PadMe />
                <Price periodicity="/ месяц">2990</Price>
                <PadMe />
                <Price periodicity="/ год">3990</Price>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
