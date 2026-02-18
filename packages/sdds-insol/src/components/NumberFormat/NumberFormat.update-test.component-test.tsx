import React, { useState, useEffect } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { NumberFormat as NumberFormatINSOL } from '.';

describe('sdds-insol: NumberFormat', () => {
    const NumberFormat = getComponent('NumberFormat') as typeof NumberFormatINSOL;

    it('[PLASMA-T2148] NumberFormat: thousandSeparator=" ", decimalSeparator=".", decimalScale=1', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandSeparator=" " decimalSeparator="." decimalScale={1} />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123 456.7');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2149] NumberFormat: thousandSeparator="backslash", decimalSeparator=",", decimalScale=2', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandSeparator="/" decimalSeparator="," decimalScale={2} />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456,789');
        cy.get('input').should('have.value', '123/456,78');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2150] NumberFormat: thousandSeparator=",", decimalSeparator="$", decimalScale=3', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandSeparator="," decimalSeparator="$" decimalScale={3} />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123,456$789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2151] NumberFormat: decimalScale=4, fixedDecimalScale', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat decimalScale={4} fixedDecimalScale />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789.0000');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2154] NumberFormat: decimalScale=0', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat decimalScale={0} />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2159] NumberFormat: thousandsGroupStyle=thousand', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandsGroupStyle="thousand" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2160] NumberFormat: thousandsGroupStyle=lakh', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandsGroupStyle="lakh" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '12 34 56 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2161] NumberFormat: thousandsGroupStyle=wan', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandsGroupStyle="wan" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '1 2345 6789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2162] NumberFormat: thousandsGroupStyle=none', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat thousandsGroupStyle="none" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2163] NumberFormat: allowNegative, allowLeadingZeros', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat allowNegative allowLeadingZeros />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '-000123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2164] NumberFormat: without allowNegative, without allowLeadingZeros', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat size="l" textAfter="₽" allowNegative={false} allowLeadingZeros={false} />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '000123');
        cy.get('body').click();
        cy.get('input').should('have.value', '123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2165] NumberFormat: remove extra zero', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat textAfter="₽" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('00.123');
        cy.get('input').should('have.value', '00.123');
        cy.get('body').click();
        cy.get('input').should('have.value', '0.123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2251] NumberFormat: size=xl, view=default, status=default, label, titleCaption, placeholder, helperText', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="xl"
                    view="default"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2252] NumberFormat: size=l, view=innerLabel, status=success, label, optional, textBefore, without titleCaption', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    view="innerLabel"
                    status="success"
                    label="Label"
                    optional
                    textBefore="textBefore"
                    titleCaption=""
                    placeholder="placeholder"
                    helperText="helperText"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2253] NumberFormat: size=m, view=default, status=warning, without label, textAfter, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="m"
                    status="warning"
                    label=""
                    required
                    requiredPlacement="right"
                    textAfter="textAfter"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2254] NumberFormat: size=s, view=innerLabel, status=error, without label, textBefore, textAfter, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="s"
                    view="innerLabel"
                    status="error"
                    label=""
                    required
                    requiredPlacement="left"
                    textBefore="textBefore"
                    textAfter="textAfter"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2255] NumberFormat: size=xs, without helperText', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="xs"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText=""
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2256] NumberFormat: clear', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    appearance="clear"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2257] NumberFormat: disabled', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    disabled
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it.skip('[PLASMA-T2258] NumberFormat: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    readOnly
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
