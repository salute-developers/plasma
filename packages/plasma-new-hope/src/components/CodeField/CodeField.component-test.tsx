import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { CodeFieldProps } from './CodeField.types';

const componentExists = hasComponent('CodeField');
const describeFn = getDescribeFN('CodeField');

const componentProps = {};

getBaseVisualTests({
    component: 'CodeField',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'shape'],
});

describeFn('CodeField', () => {
    const CodeField = componentExists ? getComponent<CodeFieldProps>('CodeField') : () => null;

    it('placeholder', () => {
        mount(
            <>
                <CodeField placeholder="123456" />
                <PadMe />
                <CodeField placeholder="0" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('codeLength', () => {
        mount(
            <>
                <CodeField codeLength={4} />
                <PadMe />
                <CodeField codeLength={5} />
                <PadMe />
                <CodeField codeLength={6} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('caption, captionAlign', () => {
        mount(
            <>
                <CodeField caption="Подпись к CodeField" captionAlign="center" />
                <PadMe />
                <CodeField caption="Подпись к CodeField" captionAlign="left" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('shape', () => {
        mount(
            <>
                <CodeField shape="segmented" />
                <PadMe />
                <CodeField shape="segmented" codeLength={5} />
                <PadMe />
                <CodeField shape="segmented" codeLength={4} />
                <PadMe />
                <CodeField shape="default" />
                <PadMe />
                <CodeField shape="default" codeLength={5} />
                <PadMe />
                <CodeField shape="default" codeLength={4} />
                <PadMe />
            </>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({ itemErrorBehavior }: { itemErrorBehavior: CodeFieldProps['itemErrorBehavior'] }) => {
            return <CodeField itemErrorBehavior={itemErrorBehavior} autoFocus />;
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

        it('keep', () => {
            mount(<Demo itemErrorBehavior="keep" />);

            cy.focused().type('1234q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    describe('codeErrorBehavior', () => {
        const Demo = ({ codeErrorBehavior }: { codeErrorBehavior: CodeFieldProps['codeErrorBehavior'] }) => {
            const [error, setError] = useState(false);
            const onFullCodeEnter = () => setError(true);

            return (
                <CodeField
                    codeErrorBehavior={codeErrorBehavior}
                    isError={error}
                    onFullCodeEnter={onFullCodeEnter}
                    autoFocus
                />
            );
        };

        it('remove-symbol', () => {
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
        mount(<CodeField autoFocus />);

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });
});
