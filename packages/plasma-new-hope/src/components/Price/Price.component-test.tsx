import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

const componentExists = hasComponent('Price');
const describeFn = getDescribeFN('Price');

describeFn('Price', () => {
    const Price = componentExists ? getComponent('Price') : () => null;
    const BodyM = componentExists ? getComponent('BodyM') : () => null;

    it('locale', () => {
        mount(
            <>
                <BodyM>
                    <Price locale="ru">12345.67</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price locale="en">12345.67</Price>
                </BodyM>
            </>
        );

        cy.matchImageSnapshot();
    });

    it('currency', () => {
        mount(
            <>
                <BodyM>
                    <Price currency="rub">12345.67</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price currency="usd">12345.67</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price currency="eur">12345.67</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price currency="inr">12345.67</Price>
                </BodyM>
            </>
        );

        cy.matchImageSnapshot();
    });

    it('stroked', () => {
        mount(
            <BodyM>
                <Price stroked>12345.67</Price>
            </BodyM>
        );

        cy.matchImageSnapshot();
    });

    it('minFraction', () => {
        mount(
            <BodyM>
                <Price minimumFractionDigits={4}>12345.6789</Price>
            </BodyM>
        );

        cy.matchImageSnapshot();
    });

    it('processing periodicity', () => {
        mount(
            <>
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
            </>
        );

        cy.matchImageSnapshot();
    });

    it('handle two prices in a row', () => {
        mount(
            <BodyM>
                <Price>99</Price>
                <Price style={{ marginLeft: '0.25rem' }} stroked>
                    200
                </Price>
            </BodyM>
        );

        cy.matchImageSnapshot();
    });
});
