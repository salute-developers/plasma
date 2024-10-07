import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const FIXTURE_PATH = 'images/placeholder.png';
const cellRootSelector = '.cell-root';
const inputSelector = 'input';

const sizes = ['xs', 's', 'm', 'l'];
const views = ['default', 'accent', 'secondary', 'success', 'warning', 'critical', 'clear'];
const buttonTypes = ['button', 'iconButton'];
const flows = ['horizontal', 'vertical', 'auto'];
const filenameTruncationWidths = ['400px', '350px', '300px', '180px', '0px'];

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
                {sizes.map((size) => (
                    <>
                        <Attach size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', sizes.length);

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {views.map((view) => (
                    <>
                        <Attach view={view} size="s" />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasAttachment=false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Attach hasAttachment={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('_buttonType', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {buttonTypes.map((buttonType) => (
                    <>
                        <Attach style={{ width: '400px' }} buttonType={buttonType} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', buttonTypes.length);

        cy.matchImageSnapshot();
    });

    it('_flow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {flows.map((flow) => (
                    <>
                        <Attach flow={flow} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', flows.length);

        cy.matchImageSnapshot();
    });

    it('filenameTruncation flow:auto', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {filenameTruncationWidths.map((filenameTruncationWidth) => (
                    <>
                        <Attach style={{ width: filenameTruncationWidth }} text={`width: ${filenameTruncationWidth}`} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecoratorWithTypo>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', filenameTruncationWidths.length);

        cy.matchImageSnapshot();
    });
});
