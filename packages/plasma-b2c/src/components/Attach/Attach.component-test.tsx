import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const FIXTURE_PATH = 'images/placeholder.png';

describe('plasma-b2c: Attach', () => {
    const Attach = getComponent('Attach');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach size="xs" />
                <PadMe />
                <Attach size="s" />
                <PadMe />
                <Attach size="m" />
                <PadMe />
                <Attach size="l" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="default" size="s" />
                <PadMe />
                <Attach view="accent" size="s" />
                <PadMe />
                <Attach view="secondary" size="s" />
                <PadMe />
                <Attach view="success" size="s" />
                <PadMe />
                <Attach view="warning" size="s" />
                <PadMe />
                <Attach view="critical" size="s" />
                <PadMe />
                <Attach view="clear" size="s" />
            </CypressTestDecoratorWithTypo>,
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('_hasAttachment=false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach hasAttachment={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').attachFile(FIXTURE_PATH);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('_buttonType', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach style={{ width: '400px' }} buttonType="button" />
                <PadMe />
                <Attach style={{ width: '400px' }} buttonType="iconButton" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('_flow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach flow="horizontal" />
                <PadMe />
                <Attach flow="vertical" />
                <PadMe />
                <Attach flow="auto" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });

    it('filenameTruncation flow:auto', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach style={{ width: '400px' }} text="width: 400px" />
                <PadMe />
                <Attach style={{ width: '350px' }} text="width: 350px" />
                <PadMe />
                <Attach style={{ width: '300px' }} text="width: 300px" />
                <PadMe />
                <Attach style={{ width: '180px' }} text="width: 180px" />
                <PadMe />
                <Attach style={{ width: '0px' }} text="width: 0px" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.matchImageSnapshot();
    });
});
