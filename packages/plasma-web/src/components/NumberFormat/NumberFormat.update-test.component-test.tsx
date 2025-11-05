import React, { useState, useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { NumberFormat as NumberFormatWEB } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: NumberFormat', () => {
    const NumberFormat = getComponent('NumberFormat') as typeof NumberFormatWEB;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T2148] NumberFormat: thousandSeparator=" ", decimalSeparator=".", decimalScale=1', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandSeparator=" " decimalSeparator="." decimalScale={1} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123 456.7');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2149] NumberFormat: thousandSeparator="/", decimalSeparator=",", decimalScale=2', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandSeparator="/" decimalSeparator="," decimalScale={2} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456,789');
        cy.get('input').should('have.value', '123/456,78');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2150] NumberFormat: thousandSeparator=",", decimalSeparator="$", decimalScale=3', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandSeparator="," decimalSeparator="$" decimalScale={3} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123,456$789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2151] NumberFormat: decimalScale=4, fixedDecimalScale', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat decimalScale={4} fixedDecimalScale />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789.0000');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2154] NumberFormat: decimalScale=0', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat decimalScale={0} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456.789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2159] NumberFormat: thousandsGroupStyle=thousand', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandsGroupStyle="thousand" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2160] NumberFormat: thousandsGroupStyle=lakh', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandsGroupStyle="lakh" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '12 34 56 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2161] NumberFormat: thousandsGroupStyle=wan', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandsGroupStyle="wan" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '1 2345 6789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2162] NumberFormat: thousandsGroupStyle=none', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat thousandsGroupStyle="none" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('123456789');
        cy.get('input').should('have.value', '123 456 789');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2163] NumberFormat: allowNegative, allowLeadingZeros', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat allowNegative allowLeadingZeros />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '-000123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2164] NumberFormat: without allowNegative, without allowLeadingZeros', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat size="l" textAfter="₽" allowNegative={false} allowLeadingZeros={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('-000123');
        cy.get('input').should('have.value', '000123');
        cy.get('body').click();
        cy.get('input').should('have.value', '123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2165] NumberFormat: remove extra zero', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat textAfter="₽" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('00.123');
        cy.get('input').should('have.value', '00.123');
        cy.get('body').click();
        cy.get('input').should('have.value', '0.123');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2251] NumberFormat: size=xl, view=default, status=default, label, titleCaption, placeholder, helperText', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="xl"
                    view="default"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2252] NumberFormat: size=l, view=innerLabel, status=success, label, optional, textBefore, without titleCaption', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2253] NumberFormat: size=m, view=default, status=warning, without label, textAfter, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2254] NumberFormat: size=s, view=innerLabel, status=error, without label, textBefore, textAfter, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2255] NumberFormat: size=xs, without helperText', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="xs"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText=""
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2256] NumberFormat: clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    clear
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2257] NumberFormat: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    disabled
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2258] NumberFormat: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberFormat
                    size="l"
                    label="Label"
                    titleCaption="titleCaption"
                    placeholder="placeholder"
                    helperText="helperText"
                    readOnly
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
