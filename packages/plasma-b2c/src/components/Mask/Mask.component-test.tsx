import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

    it('empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('partially filled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="12345" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, filled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask
                    size="m"
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    value="12345"
                    alwaysShowMask
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, permanents', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска телефона" mask="+7 (98\0) 000 - 30 - 00" maskChar="_" alwaysShowMask />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('type masked date: mask string hidden', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска даты" mask="00/00/0000" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').click().type('06');
        cy.get('input').should('have.value', '06/');
        cy.get('input').type('14');
        cy.get('input').should('have.value', '06/14/');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '06/1');
        cy.get('input').type('42023');

        cy.matchImageSnapshot();
    });

    it('type masked date: mask string visible', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Mask size="m" label="Маска даты" mask="00/00/0000" maskChar="_" alwaysShowMask />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').realClick({ position: 'topLeft' }).type('06');
        cy.get('input').should('have.value', '06/__/____');
        cy.get('input').type('14');
        cy.get('input').should('have.value', '06/14/____');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '06/1_/____');
        cy.get('input').type('42023');
        cy.get('body').realHover({ position: 'topLeft' });

        cy.matchImageSnapshot();
    });

    it('paste value', () => {
        mount(
            <CypressTestDecorator>
                <Mask size="m" label="Маска даты" mask="00/00/0000" />
            </CypressTestDecorator>,
        );

        paste('input', '12.06');

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            cy.stub(win.document, 'queryCommandSupported').callsFake(() => false);
            cy.stub(navigator.clipboard, 'writeText').callsFake(undefined);

            paste('input', '20.03');
        });

        cy.matchImageSnapshot();
    });
});
