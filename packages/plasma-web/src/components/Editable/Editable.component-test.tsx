import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconEdit } from '@salutejs/plasma-icons';

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

const noop = () => {};

describe('plasma-web: Editable', () => {
    const Editable = getComponent('Editable');
    const Headline1 = getComponent('Headline1');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Editable value="Пример текста" textComponent={Headline1} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Editable textComponent={Headline1} icon={<IconEdit size="s" color="inherit" />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('empty, placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Editable
                    textComponent={Headline1}
                    icon={<IconEdit size="s" color="inherit" />}
                    placeholder="Плейсхолдер"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('onChange', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Editable value="onChange" onChange={noop} maxLength={5} textComponent={Headline1} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('span > div').first().type('Hello');

        cy.get('span > div').first().type('Hello world');

        cy.matchImageSnapshot();
    });

    it('onBlur and onFocus', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Editable
                    value="onBlur and onFocus"
                    onBlur={noop}
                    icon={<IconEdit size="s" color="inherit" />}
                    textComponent={Headline1}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('span > span').click();

        cy.get('span > div').first().blur();

        // для случаев, если не поддерживаются современные интерфейсы window
        cy.window().then((win) => {
            // NOTE: https://github.com/salute-developers/plasma/issues/384
            // callsFake не работает с данным методом
            // cy.stub(win, 'getSelection', undefined);

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
            <CypressTestDecoratorWithTypo>
                <Editable value="onPaste" onPaste={noop} textComponent={Headline1} />
            </CypressTestDecoratorWithTypo>,
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
