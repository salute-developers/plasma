import React, { ComponentProps, useState } from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

import { CodeField as CodeFieldWEB } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: CodeField', () => {
    const CodeField = getComponent('CodeField') as typeof CodeFieldWEB;
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField />
                <PadMe />
                <CodeField value="12" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField placeholder="123456" />
                <PadMe />
                <CodeField placeholder="0" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button>focusable</Button>
                <CodeField autoFocus />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':codeLength', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField codeLength={4} />
                <PadMe />
                <CodeField codeLength={5} />
                <PadMe />
                <CodeField codeLength={6} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':caption,captionAlign', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField caption="Подпись к CodeField" captionAlign="center" />
                <PadMe />
                <CodeField caption="Подпись к CodeField" captionAlign="left" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':shape', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField size="l" />
                <PadMe />
                <CodeField size="m" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({
            itemErrorBehavior,
        }: {
            itemErrorBehavior: ComponentProps<typeof CodeFieldWEB>['itemErrorBehavior'];
        }) => {
            return <CodeField itemErrorBehavior={itemErrorBehavior} autoFocus />;
        };

        it('remove-symbol', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Demo itemErrorBehavior="remove-symbol" />
                </CypressTestDecoratorWithTypo>,
            );

            cy.focused().type('12345q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('forbid-enter', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Demo itemErrorBehavior="forbid-enter" />
                </CypressTestDecoratorWithTypo>,
            );

            cy.focused().type('123q');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Demo itemErrorBehavior="keep" />
                </CypressTestDecoratorWithTypo>,
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
            codeErrorBehavior: ComponentProps<typeof CodeFieldWEB>['codeErrorBehavior'];
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
                <CypressTestDecoratorWithTypo>
                    <Demo codeErrorBehavior="remove-code" />
                </CypressTestDecoratorWithTypo>,
            );

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });

        it('keep', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Demo codeErrorBehavior="keep" />
                </CypressTestDecoratorWithTypo>,
            );

            cy.focused().type('123456');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(350);

            cy.matchImageSnapshot();
        });
    });

    it('delete symbols', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeField autoFocus />
            </CypressTestDecoratorWithTypo>,
        );

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });
});
