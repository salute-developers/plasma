import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from 'override/_Icon';

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

const noop = () => {};

describe('sdds-finai: Editable', () => {
    const Editable = getComponent('Editable');
    const H1 = getComponent('H1');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Editable value="Пример текста" textComponent={H1} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('empty', () => {
        mount(
            <CypressTestDecorator>
                <Editable textComponent={H1} icon={<IconPlasma size="s" color="inherit" />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('empty, placeholder', () => {
        mount(
            <CypressTestDecorator>
                <Editable textComponent={H1} icon={<IconPlasma size="s" color="inherit" />} placeholder="Плейсхолдер" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('onChange', () => {
        mount(
            <CypressTestDecorator>
                <Editable value="onChange" onChange={noop} maxLength={5} textComponent={H1} />
            </CypressTestDecorator>,
        );

        cy.get('span > div').first().type('Hello');

        cy.matchImageSnapshot();
    });

    it('onBlur and onFocus', () => {
        mount(
            <CypressTestDecorator>
                <Editable
                    value="onBlur and onFocus"
                    onBlur={noop}
                    icon={<IconPlasma size="s" color="inherit" />}
                    textComponent={H1}
                />
            </CypressTestDecorator>,
        );

        cy.get('span > span').click();

        cy.get('span > div').first().blur();

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            // NOTE: https://github.com/salute-developers/plasma/issues/384
            // для браузеров IE < 9 при использовании компонента
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (win.document as any).selection = {
                empty: noop,
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (win.document.body as any).createTextRange = () => ({
                moveToElementText: noop,
                select: noop,
            });
        });

        cy.get('span > div').first().focus();

        cy.get('span > div').first().trigger('keydown', { keyCode: 13 });

        cy.matchImageSnapshot();
    });

    it('onPaste', () => {
        mount(
            <CypressTestDecorator>
                <Editable value="onPaste" onPaste={noop} textComponent={H1} />
            </CypressTestDecorator>,
        );

        paste('span > div', 'Hello from paste');

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            cy.stub(win.document, 'queryCommandSupported').callsFake(() => false);
            cy.stub(navigator.clipboard, 'writeText').callsFake(undefined);

            paste('span > div', 'Hello from paste');
        });

        cy.matchImageSnapshot();
    });
});
