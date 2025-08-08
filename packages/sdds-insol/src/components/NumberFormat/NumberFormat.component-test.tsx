import React, { useEffect, useState } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { NumberFormat as NumberFormatINSOL } from '.';

describe('sdds-insol: NumberFormat', () => {
    const NumberFormat = getComponent('NumberFormat') as typeof NumberFormatINSOL;

    it('empty', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat size="l" label="Числовой формат" textAfter="₽" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':thousandSeparator,decimalSeparator', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':decimalScale', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={3}
                />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456.6789');
        cy.get('input').should('have.value', '123 456.678');

        cy.matchImageSnapshot();
    });

    it(':defaultValue', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    label="Числовой формат"
                    defaultValue="100000.23"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={3}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it(':fixedDecimalScale', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    decimalScale={4}
                    fixedDecimalScale
                />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('1234569');
        cy.get('input').should('have.value', '1 234 569.0000');

        cy.matchImageSnapshot();
    });

    it(':allowNegative, allowLeadingZeros', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    allowNegative
                    allowLeadingZeros
                />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '-000123');

        cy.matchImageSnapshot();
    });

    it('remove extra zero', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat size="l" label="Числовой формат" textAfter="₽" thousandSeparator=" " />
            </CypressTestDecorator>,
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
            <CypressTestDecorator>
                <Component />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
