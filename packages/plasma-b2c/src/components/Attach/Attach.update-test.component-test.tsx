import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconPlasma } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const Icon = () => <IconPlasma color="inherit" />;
const FIXTURE_PATH = 'images/placeholder.png';
const cellRootSelector = '.cell-root';

describe('plasma-b2c: Attach', () => {
    const Attach = getComponent('Attach');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1296] Attach: flow=horizontal', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach flow="horizontal" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1297] Attach: remove attached file', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach flow="horizontal" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1298] Attach: flow=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach flow="vertical" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1299] Attach: hasAttachment=false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach hasAttachment={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.be.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1301] flow=auto, filenameTruncation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach style={{ width: '0px' }} text="width: 0px" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1304] Attach: view=accent, size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="accent" size="m" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1305] Attach: view=default, size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="default" size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1306] Attach: view=secondary, size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="secondary" size="s" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1307] Attach: view=clear, size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="clear" size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1308] Attach: view=success, square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="success" square />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1309] Attach: view=warning, enableContentLeft', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="warning" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1310] Attach: view=critical, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="critical" contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1311] Attach: view=dark, with buttonValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="dark" value="buttonValue" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1312] Attach: view=black', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="black" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1313] Attach: view=white', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="white" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1315] Attach: view=accent, size=m, buttonType=iconButton', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="accent" size="m" buttonType="iconButton" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });
});
