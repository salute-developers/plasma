import React, { ComponentProps, useState } from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { CodeField as CodeFieldB2C } from '.';

describe('plasma-giga: CodeField', () => {
    const CodeField = getComponent('CodeField') as typeof CodeFieldB2C;
    const Button = getComponent('Button');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <CodeField />
                <PadMe />
                <CodeField value="12" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':placeholder', () => {
        mount(
            <CypressTestDecorator>
                <CodeField placeholder="123456" />
                <PadMe />
                <CodeField placeholder="0" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':view', () => {
        mount(
            <CypressTestDecorator>
                <Button>focusable</Button>
                <CodeField autoFocus />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':codeLength', () => {
        mount(
            <CypressTestDecorator>
                <CodeField codeLength={4} />
                <PadMe />
                <CodeField codeLength={5} />
                <PadMe />
                <CodeField codeLength={6} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':caption,captionAlign', () => {
        mount(
            <CypressTestDecorator>
                <CodeField caption="Подпись к CodeField" captionAlign="center" />
                <PadMe />
                <CodeField caption="Подпись к CodeField" captionAlign="left" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':shape', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecorator>
                <CodeField size="l" />
                <PadMe />
                <CodeField size="m" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({
            itemErrorBehavior,
        }: {
            itemErrorBehavior: ComponentProps<typeof CodeFieldB2C>['itemErrorBehavior'];
        }) => {
            return <CodeField itemErrorBehavior={itemErrorBehavior} autoFocus />;
        };

        it('remove-symbol', () => {
            mount(
                <CypressTestDecorator>
                    <Demo itemErrorBehavior="remove-symbol" />
                </CypressTestDecorator>,
            );

            cy.focused().type('12345q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('forbid-enter', () => {
            mount(
                <CypressTestDecorator>
                    <Demo itemErrorBehavior="forbid-enter" />
                </CypressTestDecorator>,
            );

            cy.focused().type('123q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(
                <CypressTestDecorator>
                    <Demo itemErrorBehavior="keep" />
                </CypressTestDecorator>,
            );

            cy.focused().type('1234q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    describe(':codeErrorBehavior', () => {
        const Demo = ({
            codeErrorBehavior,
        }: {
            codeErrorBehavior: ComponentProps<typeof CodeFieldB2C>['codeErrorBehavior'];
        }) => {
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
            mount(
                <CypressTestDecorator>
                    <Demo codeErrorBehavior="remove-code" />
                </CypressTestDecorator>,
            );

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(
                <CypressTestDecorator>
                    <Demo codeErrorBehavior="keep" />
                </CypressTestDecorator>,
            );

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    it('delete symbols', () => {
        mount(
            <CypressTestDecorator>
                <CodeField autoFocus />
            </CypressTestDecorator>,
        );

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });
});
