import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { CodeInputProps } from './CodeInput.types';

const componentExists = hasComponent('CodeInput');
const describeFn = getDescribeFN('CodeInput');

const componentProps = {};

getBaseVisualTests({
    component: 'CodeInput',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('CodeInput', () => {
    const CodeInput = componentExists ? getComponent<CodeInputProps>('CodeInput') : () => null;

    it('placeholder', () => {
        mount(
            <>
                <CodeInput placeholder="123456" />
                <PadMe />
                <CodeInput placeholder="0" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('codeLength', () => {
        mount(
            <>
                <CodeInput codeLength={4} />
                <PadMe />
                <CodeInput codeLength={5} />
                <PadMe />
                <CodeInput codeLength={6} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('caption, captionAlign', () => {
        mount(
            <>
                <CodeInput caption="Подпись к CodeInput" captionAlign="center" />
                <PadMe />
                <CodeInput caption="Подпись к CodeInput" captionAlign="left" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({ itemErrorBehavior }: { itemErrorBehavior: CodeInputProps['itemErrorBehavior'] }) => {
            return <CodeInput itemErrorBehavior={itemErrorBehavior} autoFocus />;
        };

        it('remove-symbol', () => {
            mount(<Demo itemErrorBehavior="remove-symbol" />);

            cy.focused().type('12345q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('forbid-enter', () => {
            mount(<Demo itemErrorBehavior="forbid-enter" />);

            cy.focused().type('123q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    describe('codeErrorBehavior', () => {
        const Demo = ({ codeErrorBehavior }: { codeErrorBehavior: CodeInputProps['codeErrorBehavior'] }) => {
            const [error, setError] = useState(false);
            const onFullCodeEnter = () => setError(true);

            return (
                <CodeInput
                    codeErrorBehavior={codeErrorBehavior}
                    isError={error}
                    onFullCodeEnter={onFullCodeEnter}
                    autoFocus
                />
            );
        };

        it('remove-code', () => {
            mount(<Demo codeErrorBehavior="remove-code" />);

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(<Demo codeErrorBehavior="keep" />);

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    it('delete symbols', () => {
        mount(<CodeInput autoFocus />);

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });

    it('hidden', () => {
        mount(<CodeInput autoFocus hidden />);

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });
});
