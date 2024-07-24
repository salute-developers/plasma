import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import React, { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Price', () => {
    const Price = getComponent('Price');
    const BodyM = getComponent('BodyM');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price>12345.67</Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_locale', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price locale="ru">12345.67</Price>
                </BodyM>
                <PadMe />
                <BodyM>
                    <Price locale="en">12345.67</Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_currency', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_stroked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price stroked>12345.67</Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_minFraction', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price minimumFractionDigits={4}>12345.6789</Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('processing periodicity', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('handle two prices in a row', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price>99</Price>
                    <Price style={{ marginLeft: '0.25rem' }} stroked>
                        200
                    </Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
