import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Mask as MaskB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const paste = (selector: string, text: string) => {
    // https://github.com/cypress-io/cypress/issues/2386#issuecomment-613374266
    cy.get(selector)
        .first()
        .then(($destination) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
            const pasteEvent = Object.assign(new Event('paste', { bubbles: true, cancelable: true }), {
                clipboardData: {
                    getData: () => text,
                },
            });
            $destination[0].dispatchEvent(pasteEvent);
        });
};

describe('plasma-b2c: Mask', () => {
    const Mask = getComponent('Mask') as typeof MaskB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1243] Mask: view=default, size=l, alwaysShowMask, empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    view="default"
                    size="l"
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1244] Mask: view=positive, size=m, optional', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    view="positive"
                    size="m"
                    optional
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1245] Mask: view=warning, size=s, requiredPlacement=right', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    view="warning"
                    size="s"
                    required
                    requiredPlacement="right"
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1246] Mask: view=negative, size=xs, requiredPlacement=left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ marginLeft: '1rem' }}>
                    <Mask
                        view="negative"
                        size="xs"
                        required
                        requiredPlacement="left"
                        label="Маска телефона"
                        mask="+7 (000) 000 - 00 - 00"
                        maskChar="_"
                        alwaysShowMask
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1247] Mask: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    size="l"
                    disabled
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1248] Mask: readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    size="l"
                    readOnly
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1281] Mask: type letters in telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('abc');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1282] Mask: type number "7" in telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('7');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1283] Mask: type not number "7" in telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (1');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1284] Mask: delete number in telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('2');
        cy.get('input').should('have.value', '+7 (2');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1285] Mask: type in fully filled telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1286] Mask: paste in empty telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 45');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1287] Mask: paste in partially filled telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="123456" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 12 - 34');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1288] Mask: paste in fully filled telephone', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="l" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });
});
