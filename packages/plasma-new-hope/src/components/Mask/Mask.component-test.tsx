import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { TextFieldProps } from '../TextField/TextField.types';

import type { MaskProps } from './Mask.types';

const componentExists = hasComponent('Mask');
const describeFn = getDescribeFN('Mask');

const componentProps = {
    label: 'Маска телефона',
    mask: '+7 (000) 000 - 00 - 00',
    maskChar: '_',
    alwaysShowMask: true,
};

getBaseVisualTests({
    component: 'Mask',
    configComponentName: 'TextField',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

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

describeFn('Mask', () => {
    const Mask = componentExists ? getComponent<MaskProps & TextFieldProps>('Mask') : () => null;

    it('empty', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.matchImageSnapshot();
    });

    it('partially filled', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="12345" />);

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, empty', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />);

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, filled', () => {
        mount(
            <Mask
                size="s"
                label="Маска телефона"
                mask="+7 (000) 000 - 00 - 00"
                maskChar="_"
                value="12345"
                alwaysShowMask
            />,
        );

        cy.matchImageSnapshot();
    });

    it('alwaysShowMask, permanents', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (98\0) 000 - 30 - 00" maskChar="_" alwaysShowMask />);

        cy.matchImageSnapshot();
    });

    it('type masked date: mask string hidden', () => {
        mount(<Mask size="s" label="Маска даты" mask="00/00/0000" />);

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
        mount(<Mask size="s" label="Маска даты" mask="00/00/0000" maskChar="_" alwaysShowMask />);

        cy.get('input')
            .click()
            .then(($el) => {
                $el[0].setSelectionRange(0, 0);
            })
            .trigger('selectionchange')
            .type('06');
        cy.get('input').should('have.value', '06/__/____');
        cy.get('input').type('14');
        cy.get('input').should('have.value', '06/14/____');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '06/1_/____');
        cy.get('input').type('42023');

        cy.matchImageSnapshot();
    });

    it('paste value', () => {
        mount(<Mask size="s" label="Маска даты" mask="00/00/0000" />);

        paste('input', '12.06');

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            cy.stub(win.document, 'queryCommandSupported').callsFake(() => false);
            cy.stub(navigator.clipboard, 'writeText').callsFake(undefined);

            paste('input', '20.03');
        });

        cy.matchImageSnapshot();
    });

    it('mask is not passed', () => {
        mount(<Mask size="s" label="Маска телефона" />);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <Mask size="s" disabled label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />,
        );

        cy.matchImageSnapshot();
    });

    it('readOnly', () => {
        mount(
            <Mask size="s" readOnly label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" alwaysShowMask />,
        );

        cy.matchImageSnapshot();
    });

    it('type letters in telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.get('input').click().type('abc');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('type number "7" in telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.get('input').click().type('7');
        cy.get('input').should('have.value', '+7 (');

        cy.matchImageSnapshot();
    });

    it('type not number "7" in telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (1');

        cy.matchImageSnapshot();
    });

    it('delete number in telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.get('input').click().type('2');
        cy.get('input').should('have.value', '+7 (2');
        cy.get('input').type('{backspace}');
        cy.get('input').should('have.value', '');

        cy.matchImageSnapshot();
    });

    it('type in fully filled telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />);

        cy.get('input').click().type('1');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });

    it('paste in empty telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" />);

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 45');

        cy.matchImageSnapshot();
    });

    it('paste in partially filled telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="123456" />);

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 12 - 34');

        cy.matchImageSnapshot();
    });

    it('paste in fully filled telephone', () => {
        mount(<Mask size="s" label="Маска телефона" mask="+7 (000) 000 - 00 - 00" maskChar="_" value="1234567890" />);

        cy.get('input').click();
        paste('input', '!w123ф%е45');
        cy.get('input').should('have.value', '+7 (123) 456 - 78 - 90');

        cy.matchImageSnapshot();
    });
});
