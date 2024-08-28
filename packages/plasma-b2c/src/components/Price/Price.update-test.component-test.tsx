import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import React, { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Price', () => {
    const Price = getComponent('Price');
    const BodyM = getComponent('BodyM');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T716] Price: currency=rub', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price>12345.67</Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T717] Price: currency=usd, stroked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price currency="usd" stroked>
                        12345.67
                    </Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T718] Price: currency=eur, minimumFractionDigits=5', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price currency="eur" minimumFractionDigits={5}>
                        12345.67890
                    </Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1124] Price: currency=inr, minimumFractionDigits=0', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price currency="inr" minimumFractionDigits={0}>
                        12345.67
                    </Price>
                </BodyM>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1138] Price: locale=en, minimumFractionDigits=1', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <BodyM>
                    <Price locale="en" minimumFractionDigits={1}>
                        12345.67
                    </Price>
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
