import React, { useState, useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { NumberFormat as NumberFormatB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: NumberFormat', () => {
    const NumberFormat = getComponent('NumberFormat') as typeof NumberFormatB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat size="l" label="Числовой формат" textAfter="₽" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':thousandSeparator,decimalSeparator', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    value={123456789}
                />
                <PadMe />
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator="/"
                    decimalSeparator=","
                    value={123456789}
                />
                <PadMe />
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=","
                    decimalSeparator="$"
                    value={123456789}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':decimalScale', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={3}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456.6789');
        cy.get('input').should('have.value', '123 456.678');

        cy.matchImageSnapshot();
    });

    it(':defaultValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    label="Числовой формат"
                    defaultValue="100000.23"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={3}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':fixedDecimalScale', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={4}
                    fixedDecimalScale
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('1234569');
        cy.get('input').should('have.value', '1 234 569.0000');

        cy.matchImageSnapshot();
    });

    it(':allowNegative, allowLeadingZeros', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    allowNegative
                    allowLeadingZeros
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '-000123');

        cy.matchImageSnapshot();
    });

    it('remove extra zero', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat size="l" label="Числовой формат" textAfter="₽" thousandSeparator=" " />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('00.123');
        cy.get('input').should('have.value', '00.123');
        cy.get('body').click();
        cy.get('input').should('have.value', '0.123');

        cy.matchImageSnapshot();
    });

    it('flow: async controlled', () => {
        const Component = () => {
            const [value, setValue] = useState('');

            useEffect(() => {
                setTimeout(() => setValue('12345.67'));
            }, []);

            return <NumberFormat value={value} size="l" label="Числовой формат" textAfter="₽" />;
        };

        mount(
            <CypressTestDecoratorWithTypo>
                <Component />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
