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

describe('plasma-giga: Attach', () => {
    const Attach = getComponent('Attach');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1542] Attach: size=l, view=default, enableContentLeft, buttonText', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="default" size="l" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1543] Attach: size=m, view=accent, enableContentRight, buttonValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach text="" view="accent" size="m" value="buttonValue" contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1544] Attach: size=s, view=secondary, enableContentLeft, enableContentRight, buttonText, buttonValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="secondary" size="s" value="buttonValue" contentLeft={<Icon />} contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1545] Attach: size=xs, view=clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="clear" size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1546] Attach: view=success, hasAttachment=false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="success" size="l" hasAttachment={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.be.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1547] Attach: view=warning, flow=horizontal, fileFormat=all', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="warning" size="l" flow="horizontal" fileFormat="all" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1548] Attach: view=critical, flow=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="critical" size="l" flow="vertical" fileFormat="all" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1549] Attach: view=dark, flow=auto, width=500px', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="dark" size="l" flow="auto" style={{ width: '500px' }} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1550] Attach: view=black, width=250px', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="black" size="l" style={{ width: '250px' }} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1551] Attach: view=white, width=0', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="white" size="l" style={{ width: '0px' }} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1552] Attach: buttonType=iconButton', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach view="default" size="l" buttonType="iconButton" />
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
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1301] filenameTruncation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach style={{ width: '0px' }} text="width: 0px" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('_hideButtonOnAttach=true', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach hideButtonOnAttach />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input').attachFile(FIXTURE_PATH);

        cy.matchImageSnapshot();
    });
});
