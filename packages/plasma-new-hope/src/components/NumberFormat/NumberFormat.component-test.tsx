import React, { useState, useEffect } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

import type { TextFieldProps } from '../TextField/TextField.types';

import type { CustomNumberFormatProps } from './NumberFormat.types';

const componentExists = hasComponent('NumberFormat');
const describeFn = getDescribeFN('NumberFormat');

describeFn('NumberFormat', () => {
    const NumberFormat = componentExists
        ? getComponent<CustomNumberFormatProps & TextFieldProps>('NumberFormat')
        : () => null;

    it('empty', () => {
        mount(<NumberFormat label="Числовой формат" textAfter="₽" />);

        cy.matchImageSnapshot();
    });

    it(':thousandSeparator,decimalSeparator', () => {
        mount(
            <>
                <NumberFormat
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=" "
                    decimalSeparator="."
                    value={123456789}
                />
                <PadMe />
                <NumberFormat
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator="/"
                    decimalSeparator=","
                    value={123456789}
                />
                <PadMe />
                <NumberFormat
                    label="Числовой формат"
                    textAfter="₽"
                    thousandSeparator=","
                    decimalSeparator="$"
                    value={123456789}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it(':decimalScale', () => {
        mount(
            <NumberFormat
                label="Числовой формат"
                textAfter="₽"
                thousandSeparator=" "
                decimalSeparator="."
                decimalScale={3}
            />,
        );

        cy.get('input').click().type('123456.6789');
        cy.get('input').should('have.value', '123 456.678');

        cy.matchImageSnapshot();
    });

    it(':defaultValue', () => {
        mount(
            <NumberFormat
                label="Числовой формат"
                defaultValue="100000.23"
                textAfter="₽"
                thousandSeparator=" "
                decimalSeparator="."
                decimalScale={3}
            />,
        );

        cy.matchImageSnapshot();
    });

    it(':fixedDecimalScale', () => {
        mount(
            <NumberFormat
                label="Числовой формат"
                textAfter="₽"
                thousandSeparator=" "
                decimalSeparator="."
                decimalScale={4}
                fixedDecimalScale
            />,
        );

        cy.get('input').click().type('1234569');
        cy.get('input').should('have.value', '1 234 569.0000');

        cy.matchImageSnapshot();
    });

    it(':allowNegative, allowLeadingZeros', () => {
        mount(
            <NumberFormat
                label="Числовой формат"
                textAfter="₽"
                thousandSeparator=" "
                allowNegative
                allowLeadingZeros
            />,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '-000123');

        cy.matchImageSnapshot();
    });

    it('remove extra zero', () => {
        mount(<NumberFormat label="Числовой формат" textAfter="₽" thousandSeparator=" " />);

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

            return <NumberFormat value={value} label="Числовой формат" textAfter="₽" />;
        };

        mount(<Component />);

        cy.matchImageSnapshot();
    });
});
