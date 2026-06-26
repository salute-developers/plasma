import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
    CypressTestDecorator,
    getBaseVisualTests,
    getComponent,
    getDescribeFN,
    mount,
} from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

const describeFn = getDescribeFN('CodeArea');

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>{children}</CypressTestDecorator>
);

const SlotContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    background: rgba(8, 8, 8, 0.08);
`;

const ActionContent = styled.div`
    width: 1rem;
    height: 1rem;
    background: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--text-secondary-hover);
    }
`;

const jsCode = `const response = await fetch('/api/v1/ai/check', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer <token>',
        'Content-Type': 'application/json',
    },
});`;

const longLineCode =
    "const message = 'This is a very long line that wraps inside CodeArea without changing the line number column width.';";

getBaseVisualTests({
    component: 'CodeArea',
    componentProps: {
        language: 'javascript',
        showLineNumbers: true,
        style: {
            width: '640px',
        },
    },
    configPropsForMatrix: ['size'],
    children: jsCode,
    actionBeforeSnapshot: () => {
        cy.viewport(700, 500);
    },
});

describeFn('CodeArea', () => {
    const CodeArea: any = getComponent('CodeArea');

    const Demo = ({ children = jsCode, language = 'javascript', ...rest }) => (
        <div style={{ width: '640px' }}>
            <CodeArea language={language} {...rest}>
                {children}
            </CodeArea>
        </div>
    );

    it('default', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('showLineNumbers and long line', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '320px' }}>
                    <CodeArea language="javascript" showLineNumbers>
                        {longLineCode}
                    </CodeArea>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('hasWrapper, slots, divider and action', () => {
        cy.viewport(700, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo
                    appearance="hasWrapper"
                    contentAction={<ActionContent />}
                    contentHeader={<SlotContent>Header</SlotContent>}
                    contentOuter={<SlotContent>Content</SlotContent>}
                    hasDivider
                    language="javascript"
                    showLineNumbers
                >
                    {jsCode}
                </Demo>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
