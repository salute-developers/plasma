import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Mask as MaskCS } from '.';

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

describe('sdds-cs: Mask', () => {
    const Mask = getComponent('Mask') as typeof MaskCS;

    it('[PLASMA-T1243] Mask: view=default, alwaysShowMask, empty', () => {
        mount(
            <CypressTestDecorator>
                <Mask view="default" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1244] Mask: optional', () => {
        mount(
            <CypressTestDecorator>
                <Mask optional label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1245] Mask: size=s, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <Mask
                    size="s"
                    required
                    requiredPlacement="right"
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1246] Mask: view=negative, size=s, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <Mask
                        view="negative"
                        size="s"
                        required
                        requiredPlacement="left"
                        label="Маска телефона"
                        mask="+7 (000) 000 - 00 - 00"
                        maskChar="_"
                        alwaysShowMask
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1247] Mask: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Mask disabled label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1248] Mask: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Mask readOnly label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1281] Mask: type letters in telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('abc');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1282] Mask: type number "7" in telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('7');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1283] Mask: type not number "7" in telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (1');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1284] Mask: delete number in telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('2');
        cy.get('input').should('have.value', '+7 (2');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1285] Mask: type in fully filled telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />
            </CypressTestDecorator>,
        );

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1286] Mask: paste in empty telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 45');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1287] Mask: paste in partially filled telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="123456" />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 12 - 34');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1288] Mask: paste in fully filled telephone', () => {
        mount(
            <CypressTestDecorator>
                <Mask label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });
});
