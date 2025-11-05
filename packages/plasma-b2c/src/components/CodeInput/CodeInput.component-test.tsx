import React, { ComponentProps, useState } from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

import { CodeInput as CodeInputWEB } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: CodeInput', () => {
    const CodeInput = getComponent('CodeInput') as typeof CodeInputWEB;
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
                <CodeInput size="s" />
                <PadMe />
                <CodeInput value="12" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeInput size="s" placeholder="123456" />
                <PadMe />
                <CodeInput size="s" placeholder="0" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button>focusable</Button>
                <CodeInput size="s" autoFocus />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':codeLength', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeInput size="s" codeLength={4} />
                <PadMe />
                <CodeInput size="s" codeLength={5} />
                <PadMe />
                <CodeInput size="s" codeLength={6} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':caption,captionAlign', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeInput size="s" caption="Подпись к CodeInput" captionAlign="center" />
                <PadMe />
                <CodeInput size="s" caption="Подпись к CodeInput" captionAlign="left" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeInput size="l" />
                <PadMe />
                <CodeInput size="m" />
                <PadMe />
                <CodeInput size="s" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    describe(':itemErrorBehavior', () => {
        const Demo = ({
            itemErrorBehavior,
        }: {
            itemErrorBehavior: ComponentProps<typeof CodeInputWEB>['itemErrorBehavior'];
        }) => {
            return <CodeInput size="s" itemErrorBehavior={itemErrorBehavior} autoFocus />;
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
            codeErrorBehavior: ComponentProps<typeof CodeInputWEB>['codeErrorBehavior'];
        }) => {
            const [error, setError] = useState(false);
            const onFullCodeEnter = () => setError(true);

            return (
                <CodeInput
                    codeErrorBehavior={codeErrorBehavior}
                    isError={error}
                    size="s"
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
                <CodeInput size="s" autoFocus />
            </CypressTestDecoratorWithTypo>,
        );

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });

    it('hidden', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <CodeInput size="s" autoFocus hidden />
            </CypressTestDecoratorWithTypo>,
        );

        cy.focused().type('12345');
        cy.focused().type('{BackSpace}');

        cy.matchImageSnapshot();
    });
});
